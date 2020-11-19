import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { TaskManager } from 'src/app/interfaces/task-manager.interface';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
  @Input() taskManager;
  @Output() onSelectManager = new EventEmitter();
  taskManagers: TaskManager[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.taskManagers = this.dataService.getTaskManagers();
  }

  updateTaskManager(tmItem){
    this.onSelectManager.emit(tmItem);
  }

}
