import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskFormComponent } from './create-task-form/create-task-form.component';
import { Task } from 'src/app/models/task.model';
import { GetTasksService } from 'src/app/services/get-tasks.service';
import { PostTaskService } from 'src/app/services/post-task.service';
import { MatTable } from '@angular/material/table';
import { DeleteTaskService } from 'src/app/services/delete-task.service';
import { EditTaskFormComponent } from './edit-task-form/edit-task-form.component';
import { EditTaskService } from 'src/app/services/edit-task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})

export class TaskListComponent implements OnInit {

  currentId: number = 1;
  apiTaskList: Task[] = [];
  taskListLength = true;
  displayedColumns = ['name', 'description', 'estimate', 'estimateUnit', 'state', 'action'];
  @ViewChild(MatTable) table: MatTable<Task[]>;
  @Output() updateParentTaskList = new EventEmitter<any>();

  constructor(public dialog: MatDialog,
    private getTasksService: GetTasksService,
    private postTaskService: PostTaskService,
    private deleteTaskService: DeleteTaskService,
    private editTaskService: EditTaskService) { }

  openCreateDialog(): void {
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
        }).subscribe(tasklist => {
          this.apiTaskList = tasklist;

          //update the table
          this.table.renderRows();

          //update parent
          this.updateParent();

          // value of ID is incremented after every push 
          this.currentId++;

        })
      }

    });

  }

  openEditDialog(row: any): void {
    let dialogRef = this.dialog.open(EditTaskFormComponent, {
      width: '700px',
      data: { row }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //mock patch API call
        this.editTaskService.patchTask(this.apiTaskList, result).subscribe(tasklist => {
          this.apiTaskList = tasklist;
        })
      }

      //update the table
      this.table.renderRows();

      //update parent
      this.updateParent();


    })

  }

  ngOnInit(): void {

    // mocking the get API call here, but this will always return an empty array. 
    // In real life this may contain some data 
    this.getTasksService.getTasks(this.apiTaskList).subscribe(taskList => {
      // console.log(taskList);
      this.apiTaskList = taskList;
    })
  }

  editRow(row: any): void {
    this.openEditDialog(row);
    // console.log(row);
  }

  deleteRow(row: any): void {

    this.deleteTaskService.deleteTask(this.apiTaskList, row.id).subscribe(tasklist => {
      this.apiTaskList = tasklist;

      //update the table
      this.table.renderRows();

      //update parent
      this.updateParent();


    });

    // console.log(this.apiTaskList)

  }

  updateParent(): void {
    this.updateParentTaskList.emit(this.apiTaskList);
  }
}
