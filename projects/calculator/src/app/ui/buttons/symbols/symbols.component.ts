import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CoreService } from '../../../services/core.service';
import { Button, Labels } from '../button';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./../button.scss'],
})
export class SymbolsComponent implements Button<string> {

  @Input() label!: Labels;
  @Input() key!: string;

  constructor(private core: CoreService){}

  touch(): void {
    this.core.registerKey(this.label);
  }

  get getLabel(): string {
    return this.label.toString();
  }

  handle($event: KeyboardEvent): void {
    $event.preventDefault();
  }
}
