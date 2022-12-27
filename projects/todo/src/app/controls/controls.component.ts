import { Component } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {
  createEnabled = false;

  constructor(){}

  cancelCreateTask(){
    setTimeout(() => this.createEnabled = false,100)
  }

  onCreateClicked(){
    if (this.createEnabled){
      alert('new Note Added');
      this.createEnabled = false;
    }else{
      this.createEnabled = true;
    }
  }

}
