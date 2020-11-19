import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from 'src/app/data.service';
import { ClickOutsideDirective } from 'src/app/directives/click-outside.directive';
import { DateSuffix } from 'src/app/pipes/date-suffix.pipe';
import { InitialsMaker } from 'src/app/pipes/initials-maker.pipe';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { TaskManagerComponent } from '../task-manager/task-manager.component';
import { UserDataComponent } from '../user-data/user-data.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ActionItemComponent } from './action-item.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

describe('ActionItemComponent', () => {
  let component: ActionItemComponent;
  let fixture: ComponentFixture<ActionItemComponent>;
  let dataService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ActionItemComponent,
        ClickOutsideDirective,
        TaskManagerComponent,
        UserDataComponent,
        DatepickerComponent,
        InitialsMaker,
        DateSuffix
      ],
      providers: [DataService],
      imports: [
        MatCardModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatDialogModule,
        MatMenuModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatIconModule,
        HttpClientModule,
        MatDatepickerModule,
        MatNativeDateModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionItemComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    component.actionItem = {
      taskManagement: 'Jira',
      deadline: new Date(),
      user: {
        firstname: 'Test',
        lastname: 'Test',
        favoriteColor: '#555',
        id: 1
      },
      actionText: 'Lorem Ipsum'
    };
    dataService.registerIcons();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
