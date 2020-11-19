import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActionItem } from 'src/app/interfaces/action-item-interface';

@Component({
  selector: 'app-action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.scss']
})
export class ActionItemComponent implements OnInit {
  @Input() actionItem: ActionItem;
  @Output() userSelect = new EventEmitter();
  @Output() deadlineSelect = new EventEmitter();
  @Output() taskManagerSelect = new EventEmitter();

  textIsEditable: boolean;
  @ViewChild('textarea') textarea: ElementRef;

  constructor() { }

  ngOnInit(): void {}

  updateUser(newUser): void {
    this.userSelect.emit(newUser);
  }

  updateDeadline(newDeadline): void {
    this.deadlineSelect.emit(newDeadline);
  }

  updateTaskManager(newTaskManager): void {
    this.taskManagerSelect.emit(newTaskManager);
  }

  toggleEditMode(isEditable: boolean): void {
    this.textIsEditable = isEditable;
    if (isEditable) {
      setTimeout(() => {
        this.textarea.nativeElement.focus();
      }, 10);
    }
  }

}
