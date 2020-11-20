import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ActionItemComponent } from './components/action-item/action-item.component';
import { DataService } from './data.service';
import { CUSTOM_ELEMENTS_SCHEMA, getDebugNode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let fixture;
  let app;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ActionItemComponent
      ],
      providers: [
        DataService
      ],
      imports: [
        MatIconModule,
        HttpClientModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ActionItem'`, () => {
    expect(app.title).toEqual('ActionItem');
  });

  it('should call changeUser handler when a child ActionItem component emits a userSelect event', fakeAsync(() => {
    spyOn(app, 'changeUser');
    app.ngOnInit();
    fixture.detectChanges();

    const actionItemComponent = getDebugNode(fixture.nativeElement.querySelector('app-action-item'));
    actionItemComponent.componentInstance.userSelect
      .emit(
        { firstname: 'John', lastname: 'Smith' },
        { actionText: 'Lorem impsum', deadline: new Date() }
      );
    tick();
    fixture.detectChanges();
    expect(app.changeUser).toHaveBeenCalled();
  }));

  it('should call changeDeadline handler when a child ActionItem component emits a deadlineSelect event', fakeAsync(() => {
    spyOn(app, 'changeDeadline');

    app.ngOnInit();
    fixture.detectChanges();

    const actionItemComponent = getDebugNode(fixture.nativeElement.querySelector('app-action-item'));

    const currentDate = new Date();
    actionItemComponent.componentInstance.deadlineSelect.emit(currentDate, { actionText: 'Lorem impsum', deadline: new Date() });
    tick();
    fixture.detectChanges();
    expect(app.changeDeadline).toHaveBeenCalled();
  }));

  it('should call changeTaskManager handler when a child ActionItem component emits a taskManagerSelect event', fakeAsync(() => {
    spyOn(app, 'changeTaskManager');
    app.ngOnInit();
    fixture.detectChanges();
    const actionItemComponent = getDebugNode(fixture.nativeElement.querySelector('app-action-item'));

    actionItemComponent.componentInstance.taskManagerSelect
      .emit(
        { name: 'Trello', iconKey: 'trello' },
        { actionText: 'Lorem impsum', deadline: new Date() }
      );
    tick();
    fixture.detectChanges();
    expect(app.changeTaskManager).toHaveBeenCalled();
  }));

});
