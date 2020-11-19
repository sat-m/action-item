import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  userData = {
    firstname: '',
    lastname: ''
  };
  public get formIsValid(): boolean {
    return !!this.userData.firstname.trim() && !!this.userData.lastname.trim();
  }
  constructor(public dialogRef: MatDialogRef<NewUserComponent>) { }

  cancel(): void {
    this.dialogRef.close();
  }

  saveUser(): void {
    this.userData = {
      firstname: this.userData.firstname.trim(),
      lastname: this.userData.lastname.trim()
    };
    if (this.userData.firstname && this.userData.lastname) {
      this.dialogRef.close(this.userData);
    }
  }

}
