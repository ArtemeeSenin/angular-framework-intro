import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hobby',
  template: `
  <li
    (click)="onRemoveHobby()"
  >{{ hobbyName }}</li>
  `
})

export class HobbyComponent {
  @Input() hobbyName: string;
  @Output() hobbyRemoved = new EventEmitter<string>();

  onRemoveHobby() {
    this.hobbyRemoved.emit(this.hobbyName);
  }
}
