import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  @Input() date;
  @Output() onSelectDate = new EventEmitter();
  minDate: Date;
  maxDate: Date;
  constructor() { 
    this.minDate = new Date();
    // maximum allowed date to be the end of this year, since we do not show the year part in actionItem deadline, this will help avoid misunderstandings 
    this.maxDate = new Date(this.minDate.getFullYear(), 11, 31);
  }

  ngOnInit(): void {
  }

  dateUpdated(event){
    console.log(event.value);
    
    this.onSelectDate.emit(event.value);
    
  }

}
