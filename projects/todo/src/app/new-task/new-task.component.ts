import { Component } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {

  task:Task = {title:'', content:''};

  constructor(){}

}
