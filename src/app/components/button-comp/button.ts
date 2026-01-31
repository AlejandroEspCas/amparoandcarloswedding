import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-comp',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class ButtonComp {
  @Input() text: string = 'RSVP';
  @Input() disabled: boolean = false;

  @Output() buttonClick = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }
}
