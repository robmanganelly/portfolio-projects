import { Component, HostListener } from '@angular/core';
import { CoreService } from '../../services/core.service';
import { Labels } from '../buttons/button';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent {
  constructor(private core: CoreService) {}

  @HostListener('window:keydown', ['$event'])
  press($event: KeyboardEvent) {
    console.log('register keypress', $event.key)
    if (this.core.isValidKey($event.key)) {
      this.core.registerKey($event.key);
    }
  }

  numbers: Labels[][] = [
    ['DEL', '^', '%', '/'],
    ['1', '2', '3', '+'],
    ['4', '5', '6', '-'],
    ['7', '8', '9', '*'],
    ['C', '0', '.', '='],
  ];
}
