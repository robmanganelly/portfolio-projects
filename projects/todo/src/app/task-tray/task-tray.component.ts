import { Component } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-task-tray',
  templateUrl: './task-tray.component.html',
  styleUrls: ['./task-tray.component.scss']
})
export class TaskTrayComponent {

  tasks: Task[] = [
    { title: 'test', content: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsuum dolor lorem ispum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor' },
    { title: 'test', content:'lorem ipsum dolor'},
    { title: 'test', content:'lorem ipsum dolor'},
    { title: 'test', content:'lorem ipsum dolor'},
    { title: 'test', content:'lorem ipsum dolor'},
    { title: 'test', content:'lorem ipsum dolor'},
    { title: 'test', content:'lorem ipsum dolor'},
    { title: 'test', content:'lorem ipsum dolor'},
    { title: 'test', content:'lorem ipsum dolor'},
    { title: 'test', content:'lorem ipsum dolor'}
  ];
  constructor(){}

}
