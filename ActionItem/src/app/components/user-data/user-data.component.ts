import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/interfaces/user.interface';
import { NewUserComponent } from '../new-user/new-user.component';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit, OnDestroy {
  @Input() user: User;
  @Output() userSelect = new EventEmitter();
  users: User[];
  usersSubscription: Subscription;

  public get username(): string {
    return `${this.user.firstname} ${this.user.lastname}`;
  }

  constructor(private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();

    // to have the up to date list of users
    this.usersSubscription = this.dataService.usersCollectionChange.subscribe(() => {
      this.getUsers();
    });
  }

  getUsers(): void {
    this.dataService.getUsers()
      .subscribe((userData) => {
        this.users = userData;
      });
  }

  userUpdated(user): void {
    this.userSelect.emit(user);
  }

  openNewUserDialog(): void {
    const dialogRef = this.dialog.open(NewUserComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data && data.firstname && data.lastname) {
        const newUser = {
          isNewUser: true,
          ...data
        };
        this.userSelect.emit(newUser);
      }
    });
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}
