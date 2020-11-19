import { TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ActionItemComponent } from './components/action-item/action-item.component';
import { DataService } from './data.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

describe('AppComponent', () => {
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
        // MatDatepickerModule,
        // MatNativeDateModule,
        MatIconModule,
        HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ActionItem'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ActionItem');
  });


});
