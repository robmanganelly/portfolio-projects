import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TaskLoaderService {
  constructor() {}

  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks') ?? 'null') ?? [];
  }

  writeTasks(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
