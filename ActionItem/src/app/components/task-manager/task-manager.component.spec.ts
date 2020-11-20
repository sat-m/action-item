import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DataService } from 'src/app/data.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TaskManagerComponent } from './task-manager.component';
import { HttpClientModule } from '@angular/common/http';

describe('TaskManagerComponent', () => {
  let component: TaskManagerComponent;
  let fixture: ComponentFixture<TaskManagerComponent>;
  let dataservice;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskManagerComponent],
      providers: [DataService],
      imports: [
        MatMenuModule,
        MatIconModule,
        MatTooltipModule,
        HttpClientModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagerComponent);
    dataservice = TestBed.inject(DataService);
    component = fixture.componentInstance;
    dataservice.registerIcons();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should hide task manager label when task manager is None', () => {
    component.taskManager = 'None';
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('.task-label');

    expect(label).toBeNull();

  });

  it('should show task manager label when task manager is anything other than None', () => {
    component.taskManager = 'Jira';

    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('.task-label');

    expect(label).toBeDefined();
  });
});
