import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActionItemComponent } from './components/action-item/action-item.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { DateSuffix } from './pipes/date-suffix.pipe';
import { InitialsMaker } from './pipes/initials-maker.pipe';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { EnterKeyPressDirective } from './directives/enter-key.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';


import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


import { HttpClientModule } from '@angular/common/http';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { NewUserComponent } from './components/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionItemComponent,
    UserDataComponent,
    DateSuffix,
    InitialsMaker,
    ClickOutsideDirective,
    EnterKeyPressDirective,
    DatepickerComponent,
    TaskManagerComponent,
    NewUserComponent
  ],
  entryComponents: [NewUserComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    TextFieldModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
