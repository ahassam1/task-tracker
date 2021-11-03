import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskListComponent } from '../task-list.component';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TaskListComponent>) { }

  ngOnInit(): void {
  }

  confirmDelete(): void {
    this.dialogRef.close(true);
  }

  cancelDelete(): void {
    this.dialogRef.close(false);
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

}
