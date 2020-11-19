import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { ActionItem } from "./interfaces/action-item-interface";
import { TaskManager } from './interfaces/task-manager.interface';
import { User } from './interfaces/user.interface';

enum TaskManagementEnum {
  Slack = "Slack",
  Trello = "Trello",
  Jira = "Jira",
  None = "None"
};

let colors = [
  "#8dd7bf",
  "#00a5e3",
  "#ff5768",
  "#ff96c5",
  "#0065b5",
  "#fc6238",
  "#ffd872",
  "#00b0ba",
  "#e77577",
  "#6c88c4",
  "#c05780",
  "#cff800",
  "#ff5c77",
  "#ffec59",
  "#ffa23a",
  "#74737a",
]

@Injectable()
export class DataService {
  private colors = colors;
  private users: User[] = [
    {
      id: "1",
      firstname: "Satenik",
      lastname: "Markosyan",
      favoriteColor: this.colors[0],
    },
    {
      id: "2",
      firstname: "Vahagn",
      lastname: "Saribekyan",
      favoriteColor: this.colors[1],
    },
  ];

  private actionItems: ActionItem[] = [
    {
      user: this.users[0],
      actionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla ultricies hendrerit. Curabitur laoreet ipsum nec nisl tincidunt aliquam. Nam ex neque, laoreet a sapien vel, malesuada condimentum est. Nunc et nisi eros.",
      deadline: new Date(),
      taskManagement: TaskManagementEnum.Jira,
    },
    {
      user: this.users[1],
      actionText: "Morbi ut ligula ut magna scelerisque laoreet nec at enim. In hac habitasse platea dictumst. Nunc ornare, eros sed cursus lobortis, urna diam ullamcorper felis, in vehicula libero risus a orci.",
      deadline: new Date(),
      taskManagement: TaskManagementEnum.Trello,
    },
  ];

  

  private taskManagers: TaskManager[] = [
    {
      iconKey: 'jira',
      name: TaskManagementEnum.Jira
    },
    {
      iconKey: 'slack',
      name: TaskManagementEnum.Slack
    },
    {
      iconKey: 'trello',
      name: TaskManagementEnum.Trello
    },
    {
      iconKey: null,
      name: TaskManagementEnum.None
    }
  ];

  addNewUser(userData): User {
    const id = this.users.length;
    // to be tested!!!!
    const colorIndex = this.users.length % this.colors.length;
    debugger
    let newUser: User = {
      firstname: userData.firstname,
      lastname: userData.lastname,
      id: id,
      favoriteColor: this.colors[colorIndex]
    }
    
    this.users.push(newUser);
    // emit an event so that all the interested parts know the users collection has been updated
    return newUser;
    

  }

  // TODO apply observable logic here
  getActionItems() {
    return this.actionItems;
  }
  getUsers() {
    return this.users;
  }

  getTaskManagers() {
    return this.taskManagers;
  }
}
