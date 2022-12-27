import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Task } from '../interfaces/task';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

  @ViewChild('taskForm') taskForm!: NewTaskComponent;
  createEnabled = false;

  @Output()
  taskAdded: EventEmitter<Task> = new EventEmitter<Task>();


  constructor(){}

  private _wrapTask(title: string, content: string): Task {
    return  {title, content}
  }

  cancelCreateTask(){
    setTimeout(() => this.createEnabled = false,100)
  }

  onCreateClicked(){
    if (this.createEnabled){
      const {title, content} = this.taskForm.task;
      this.taskAdded.emit(this._wrapTask(title,content));
      this.createEnabled = false;
    }else{
      this.createEnabled = true;
    }
  }

}
