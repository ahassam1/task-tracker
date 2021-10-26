import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskFormComponent } from './create-task-form/create-task-form.component';
import { Task } from 'src/app/models/task.model';
import { GetTasksService } from 'src/app/services/get-tasks.service';
import { PostTaskService } from 'src/app/services/post-task.service';
import { MatTable } from '@angular/material/table';
import { DeleteTaskService } from 'src/app/services/delete-task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})

export class TaskListComponent implements OnInit {

  currentId: number = 1;
  apiTaskList: Task[] = [];
  displayedColumns = ['name', 'description', 'estimate', 'estimateUnit', 'state', 'action'];
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(public dialog: MatDialog,
    private getTasksService: GetTasksService,
    private postTaskService: PostTaskService,
    private deleteTaskService: DeleteTaskService) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(CreateTaskFormComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // mocking the post API call here
        this.postTaskService.postTask(this.apiTaskList, {
          id: this.currentId,
          name: result.name,
          description: result.description,
          estimate: result.estimate,
          estimateUnit: result.estimateUnit,
          state: result.state,
        })

        // mocking the get API call here
        this.getTasksService.getTasks(this.apiTaskList).subscribe(taskList => {
          this.apiTaskList = taskList;
        })

        //update the table
        this.table.renderRows();

        // value of ID is incremented after every push 
        this.currentId++;
      }
    });
  }

  ngOnInit(): void {

    // mocking the get API call here, but this will always return an empty array. 
    // In real life this may contain some data 
    this.getTasksService.getTasks(this.apiTaskList).subscribe(taskList => {
      console.log(taskList);
      this.apiTaskList = taskList;
    })
  }

  editRow(row: any): void {
    console.log(row);
  }

  deleteRow(row: any): void {

    this.deleteTaskService.deleteTask(this.apiTaskList, row.id).subscribe(tasklist => {
      this.apiTaskList = tasklist;
    });

    console.log(this.apiTaskList)
    //update the table
    this.table.renderRows();
  }
}
