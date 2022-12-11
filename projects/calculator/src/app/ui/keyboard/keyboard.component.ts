import { Component } from '@angular/core';
import { CoreService } from '../../services/core.service';
import { Labels } from '../buttons/button';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {

  constructor(private core: CoreService){}

  numbers: Labels[][] = [['1','2','3'],['4','5','6'],['7','8','9']];
  handle($event: Labels) {
    this.core.compose($event)
  }

}
