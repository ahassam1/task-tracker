import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  taskList: Task[] = [];
  totalPlanned: number = 0;
  totalInProgress: number = 0;
  totalComplete: number = 0;
  total: number = 0;




  constructor() { }

  ngOnInit(): void {

    this.updateTimes();

  }

  taskListUpdate(taskList: any) {

    if (taskList) {
      console.log(taskList)
      this.taskList = taskList;
    }

    this.updateTimes();
    console.log(this.totalPlanned, this.totalInProgress, this.totalComplete, this.total)
  }

  updateTimes() {
    if (this.taskList.length) {
      this.taskList.forEach(task => {
        switch (task.estimateUnit) {
          case ('minutes'): {
            if (task.state === 'Planned') {
              this.totalPlanned = (1 / 60) * task.estimate;
            }
            else if (task.state === 'In-Progress') {
              this.totalInProgress = (1 / 60) * task.estimate;
            }
            else if (task.state === 'Complete') {
              this.totalComplete = (1 / 60) * task.estimate;
            }
            break;
          }

          case ('hours'): {
            if (task.state === 'Planned') {
              this.totalPlanned = task.estimate;
            }
            else if (task.state === 'In-Progress') {
              this.totalInProgress = task.estimate;
            }
            else if (task.state === 'Complete') {
              this.totalComplete = task.estimate;
            }
            break;
          }

          case ('days'): {
            if (task.state === 'Planned') {
              this.totalPlanned = (24) * task.estimate;
            }
            else if (task.state === 'In-Progress') {
              this.totalInProgress = (24) * task.estimate;
            }
            else if (task.state === 'Complete') {
              this.totalComplete = (24) * task.estimate;
            }
            break;
          }

          case ('months'): {
            if (task.state === 'Planned') {
              this.totalPlanned = (730.5) * task.estimate;
            }
            else if (task.state === 'In-Progress') {
              this.totalInProgress = (730.5) * task.estimate;
            }
            else if (task.state === 'Complete') {
              this.totalComplete = (730.5) * task.estimate;
            }
            break;
          }
        }
      })
      this.total= this.totalComplete + this.totalInProgress + this.totalPlanned;
    }
  }

}
