import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskFormComponent } from './create-task-form/create-task-form.component';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  formObject: any;

  openDialog(): void {
    let dialogRef = this.dialog.open(CreateTaskFormComponent, {
      width: '700px',
      data: { forObject: this.formObject }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
  }
}
