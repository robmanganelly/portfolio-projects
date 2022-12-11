import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';

  show = false;
  showCredits = false;

  handleButton(event: any){
    console.log(event);
  }

  onChange(event: any){
    this.show = event.target.checked;
  }
}
