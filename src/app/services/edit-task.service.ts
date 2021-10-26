import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EditTaskService {

  constructor() { }

  //this a mock API call that modifies a task and returns the modified store
  patchTask(taskArray: Task[], newTask: Task): Observable<Task[]> {

    let modifiedTaskArray = taskArray.map(originalTask => {
      console.log(originalTask)
      console.log(newTask)
      if (originalTask.id === newTask.id) {
        return newTask;
      }

      return originalTask;
    })

    return of(modifiedTaskArray);

  }

}
