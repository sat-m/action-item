import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/interfaces/user.interface';
import { NewUserComponent } from '../new-user/new-user.component';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  @Input() user: User;
  @Output() onUserSelect = new EventEmitter();
  users: User[];
  
  public get username(){
    return `${this.user.firstname} ${this.user.lastname}`
  }
  
  constructor(private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.users = this.dataService.getUsers();
  }

  userUpdated(user){
    this.onUserSelect.emit(user);
  }

  openNewUserDialog(){
    const dialogRef = this.dialog.open(NewUserComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log('The dialog was closed', data);
      
      if(data && data.firstname && data.lastname){
        //add the user
        let newUser = {
          isNewUser: true,
          ...data
        }
        this.onUserSelect.emit(newUser);
      }
    });  }
}
