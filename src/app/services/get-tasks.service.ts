import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTasksService {

  constructor() { }

  //this a mock API call that returns all the tasks
  getTasks(taskArray: Task[]): Observable<Task[]> {
    return of(taskArray);
  }
}
