import { Component } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskLoaderService } from '../services/task-loader.service';

@Component({
  selector: 'app-task-tray',
  templateUrl: './task-tray.component.html',
  styleUrls: ['./task-tray.component.scss'],
})
export class TaskTrayComponent {
  tasks: Task[] = [];
  constructor(private taskLoader: TaskLoaderService) {
    this.tasks = this.taskLoader.getTasks();
  }
  addTask($event: Task): void {
    this.tasks.push($event);
    this.taskLoader.writeTasks(this.tasks);
  }
}
