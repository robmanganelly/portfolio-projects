import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button, Labels } from '../button';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./../button.scss'],
})
export class NumbersComponent implements Button<number> {
  @Input() label!: Labels;
  @Output('trigger') emit: EventEmitter<Labels> = new EventEmitter<Labels>();
  @Input() key!: string;

  constructor() {}

  press(event: any): void {
    if (event.key === this.key) {
      this.emit.emit(this.label);
    }
  }

  touch(): void {
    this.emit.emit(this.label);
  }

  get getLabel(): string {
    return this.label.toString();
  }
}
