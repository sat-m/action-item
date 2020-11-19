import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { ActionItem } from './interfaces/action-item-interface';
import { User } from './interfaces/user.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
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
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dataService: DataService) {
    iconRegistry.addSvgIcon('jira', sanitizer.bypassSecurityTrustResourceUrl('assets/img/jira.svg'));
    iconRegistry.addSvgIcon('slack', sanitizer.bypassSecurityTrustResourceUrl('assets/img/slack.svg'));
    iconRegistry.addSvgIcon('trello', sanitizer.bypassSecurityTrustResourceUrl('assets/img/trello.svg'));
  }

  ngOnInit() {
    this.users = this.dataService.getUsers();
    this.actionItems = this.dataService.getActionItems();
  }

  changeUser(newUser, actionItem: ActionItem) {
    if (!newUser) {
      return;
    }
    if (newUser.isNewUser) {
      let addedUser = this.dataService.addNewUser(newUser);
      actionItem.user = addedUser;
      this.users = this.dataService.getUsers();
      //add a new user, get all the users, update the actionItem user
    } else {
      actionItem.user = newUser

    }

  }

  changeDeadline(newDate: Date, actionItem: ActionItem) {
    if (newDate) {
      actionItem.deadline = newDate
    }
  }

  changeTaskManager(selectedTaskManager: TaskManager, actionItem: ActionItem) {

    if (selectedTaskManager) {
      actionItem.taskManagement = selectedTaskManager.name
    }
  }
}
