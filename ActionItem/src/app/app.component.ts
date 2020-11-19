import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { ActionItem } from './interfaces/action-item-interface';
import { User } from './interfaces/user.interface';
import { TaskManager } from './interfaces/task-manager.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ActionItem';
  users: User[];
  actionItems: ActionItem[];
  constructor( private dataService: DataService) {
   this.dataService.registerIcons();
  }

  ngOnInit(): void {
    this.dataService.getUsers()
      .subscribe((userData) => {
        this.users = userData;
      });

    this.dataService.getActionItems()
      .subscribe((actionData) => {
        this.actionItems = actionData;
      });
  }

  changeUser(newUser, actionItem: ActionItem): void {
    if (!newUser) {
      return;
    }
    if (newUser.isNewUser) {
      const addedUser = this.dataService.addNewUser(newUser);
      actionItem.user = addedUser;
      this.dataService.getUsers()
        .subscribe((userData) => {
          this.users = userData;
        });
    } else {
      actionItem.user = newUser;
    }

  }

  changeDeadline(newDate: Date, actionItem: ActionItem): void {
    if (newDate) {
      actionItem.deadline = newDate;
    }
  }

  changeTaskManager(selectedTaskManager: TaskManager, actionItem: ActionItem): void {

    if (selectedTaskManager) {
      actionItem.taskManagement = selectedTaskManager.name;
    }
  }
}
