import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label: string = 'Submit';
  @Input() onPress: () => void = () => {};

  handleClick(): void {
    if (this.onPress) {
      this.onPress();
    }
  }
}
