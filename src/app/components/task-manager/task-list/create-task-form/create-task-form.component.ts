import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskListComponent } from '../task-list.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.css']
})
export class CreateTaskFormComponent implements OnInit {

  taskForm: FormGroup;
  units = [ 'minutes', 'hours', 'days', 'months'];
  states = ['Onhold', 'In-Progress', 'Complete'];

  constructor(public dialogRef: MatDialogRef<TaskListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      estimate: new FormControl('', [Validators.required]),
      estimateUnit: new FormControl('minutes', Validators.required),
      state: new FormControl('Onhold', Validators.required)
    });
  }

  onSubmit(taskForm) {
    this.dialogRef.close(taskForm.value)
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
