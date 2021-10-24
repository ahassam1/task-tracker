import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeleteTaskService {

  constructor() { }

      //this a mock API call that deletes a task
      deleteTask(taskArray: Task[], taskId: Number): Observable<Task[]> {
        taskArray.forEach((task, index) => {
          if(task.id === taskId){
            taskArray.splice(index, 1);
          }
        })
        return of(taskArray);
      }
  

}
