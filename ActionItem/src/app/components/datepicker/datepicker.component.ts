import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  @Input() date;
  @Output() selectDate = new EventEmitter();
  minDate: Date;
  maxDate: Date;
  constructor() {
    this.minDate = new Date();

    // maximum allowed date to be the end of this year
    this.maxDate = new Date(this.minDate.getFullYear(), 11, 31);
  }

  ngOnInit(): void {
  }

  dateUpdated(event): void {
    console.log(event.value);

    this.selectDate.emit(event.value);

  }

}
