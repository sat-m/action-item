import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appEnterKeyPress]'
})
export class EnterKeyPressDirective {
  @Output() enterKeyPress = new EventEmitter<void>();
  
  constructor(private elementRef: ElementRef) {
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.enterKeyPress.emit();
    }
  }


 

}