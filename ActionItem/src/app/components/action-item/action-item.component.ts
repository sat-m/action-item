import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActionItem } from 'src/app/interfaces/action-item-interface';

@Component({
  selector: 'action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.scss']
})
export class ActionItemComponent implements OnInit {
  @Input() actionItem: ActionItem;
  @Output() onUserSelect = new EventEmitter();
  @Output() onDeadlineSelect = new EventEmitter();
  @Output() onTaskManagerSelect = new EventEmitter();

  textIsEditable: boolean;
  @ViewChild("textarea") textarea: ElementRef;


  constructor() { }
  ngOnInit(): void {
    console.log(this.actionItem);
  }

  updateUser(newUser) {
    this.onUserSelect.emit(newUser);
  }

  updateDeadline(newDeadline){
    
    this.onDeadlineSelect.emit(newDeadline);
  }

  updateTaskManager(newTaskManager){
    this.onTaskManagerSelect.emit(newTaskManager);
  }

  toggleEditMode(isEditable: boolean): void {
    this.textIsEditable = isEditable;
    if (isEditable) {
      setTimeout(() => {
        this.textarea.nativeElement.focus();
      }, 10)
    }
  }

}
