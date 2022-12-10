import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button, Labels } from '../button';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./../button.scss'],
})
export class SymbolsComponent implements Button<string> {

  @Input() label!: Labels;
  @Output('trigger') emit: EventEmitter<Labels> = new EventEmitter<Labels>();
  @Input() key!: string;

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

  constructor() {}

}
