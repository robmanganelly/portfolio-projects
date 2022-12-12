import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CoreService } from '../services/core.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
})
export class CalcComponent{

  show: boolean =true;

  constructor(private core: CoreService, private router: Router) {
    const {state} = this.router.getCurrentNavigation()?.extras as  NavigationExtras;
    this.show = state? state['show'] : this.show;
    this.core.clear();
  }

  onChange($event: any) {
    setTimeout(() => {
      this.show = $event.target.checked;
      if (!this.show) {
        this.core.clear();
        this.router.navigate(['']);
      }
    }, 500);
  }
}
