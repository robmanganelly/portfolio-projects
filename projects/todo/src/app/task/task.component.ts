import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input()
  title!:string;
  @Input()
  content!:string;
  @Input()
  timestamp!:number;

  constructor(){
    this.timestamp = Date.now()
  }
}
