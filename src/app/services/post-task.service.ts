import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostTaskService {

  constructor() { }

    //this a mock API call that stores a task and returns the modified store
    postTask(taskArray: Task[], task: Task): Observable<Task[]> {
      taskArray.push(task);
      return of(taskArray);
    }
  
}
