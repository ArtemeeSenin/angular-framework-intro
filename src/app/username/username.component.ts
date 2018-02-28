import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-username',
  template: `
    <p (click)="onUsernameClicked()">{{username}}</p>
  `
})
export class UsernameComponent {
  @Input() username: string;
  @Output() userClicked = new EventEmitter<string>();
  onUsernameClicked() {
    this.userClicked.emit(this.username);
  }
}
