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

    //reset times 
    this.totalPlanned = 0;
    this.totalInProgress = 0;
    this.totalComplete = 0;
    this.total = 0;

    this.updateTimes();
    console.log(this.totalPlanned, this.totalInProgress, this.totalComplete, this.total)
  }

  updateTimes() {
    if (this.taskList.length) {
      this.taskList.forEach(task => {
        switch (task.estimateUnit) {
          case ('minutes'): {
            if (task.state === 'Planned') {
              this.totalPlanned += parseFloat(((1 / 60) * Number(task.estimate)).toFixed(2));
            }
            else if (task.state === 'In-Progress') {
              this.totalInProgress += parseFloat(((1 / 60) * Number(task.estimate)).toFixed(2));
            }
            else if (task.state === 'Complete') {
              this.totalComplete += parseFloat(((1 / 60) * Number(task.estimate)).toFixed(2));
            }
            break;
          }

          case ('hours'): {
            if (task.state === 'Planned') {
              this.totalPlanned += parseFloat(Number(task.estimate).toFixed(2));
            }
            else if (task.state === 'In-Progress') {
              this.totalInProgress += parseFloat(Number(task.estimate).toFixed(2));
            }
            else if (task.state === 'Complete') {
              this.totalComplete += parseFloat(Number(task.estimate).toFixed(2));
            }
            break;
          }

          case ('days'): {
            if (task.state === 'Planned') {
              this.totalPlanned += parseFloat(((24) * Number(task.estimate)).toFixed(2));
            }
            else if (task.state === 'In-Progress') {
              this.totalInProgress += parseFloat(((24) * Number(task.estimate)).toFixed(2));
            }
            else if (task.state === 'Complete') {
              this.totalComplete += parseFloat(((24) * Number(task.estimate)).toFixed(2));
            }
            break;
          }

          case ('months'): {
            if (task.state === 'Planned') {
              this.totalPlanned += parseFloat(((730.5) * Number(task.estimate)).toFixed(2));
            }
            else if (task.state === 'In-Progress') {
              this.totalInProgress += parseFloat(((730.5) * Number(task.estimate)).toFixed(2));
            }
            else if (task.state === 'Complete') {
              this.totalComplete += parseFloat(((730.5) * Number(task.estimate)).toFixed(2));
            }
            break;
          }
        }
      })
      this.total = this.totalInProgress + this.totalPlanned;
    }
  }

}
