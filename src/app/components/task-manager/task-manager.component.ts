import { Component, OnInit } from '@angular/core';
import { GetTasksService } from 'src/app/services/get-tasks.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  //this array mocks what would normally be stored in a database 
  taskArray: Task [] = [{
    id: 1,
    name: 'test',
    description: 'test',
    estimate: 1,
    state: 'test'
  }]
  
  constructor(private getTasksService: GetTasksService) { }

  ngOnInit(): void {
    this.getTasksService.getTasks(this.taskArray).subscribe(tasks =>
      {
        console.log(tasks)
      })
  }

}
