import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  userData =  {
    firstname: "",
    lastname: ""
  }
  constructor(public dialogRef: MatDialogRef<NewUserComponent>) { }

  ngOnInit(): void {
  }

  cancel() {
    this.dialogRef.close();

  }

  saveUser() {
    console.log(this.userData);
    this.dialogRef.close(this.userData);

  }

}
