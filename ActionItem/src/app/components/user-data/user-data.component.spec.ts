import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { By } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';
import { InitialsMaker } from 'src/app/pipes/initials-maker.pipe';
import { UserDataComponent } from './user-data.component';

describe('UserDataComponent', () => {
  let component: UserDataComponent;
  let fixture: ComponentFixture<UserDataComponent>;
  let dataservice;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDataComponent, InitialsMaker],
      providers: [DataService, MatDialog],
      imports: [
        MatDialogModule,
        MatMenuModule,
        MatIconModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataComponent);
    dataservice = TestBed.inject(DataService);
    component = fixture.componentInstance;
    component.user = {
      firstname: 'Test',
      lastname: 'Test',
      favoriteColor: '#555',
      id: 1
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the username', () => {
    const username = fixture.nativeElement.querySelector('.username');
    expect(username.textContent).toContain('Test Test');
  });
});
