import { Component } from '@angular/core';
import { CoreService } from './services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calculator';

  constructor(private core: CoreService) {}

  show = false;
  showCredits = false;

  handleButton(event: any) {
    console.log(event);
  }

  onChange(event: any) {
    setTimeout(() => {
      this.show = event.target.checked;
      if (!this.show) {
        this.core.clear();
      }
    }, 500);
  }
}
