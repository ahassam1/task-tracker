import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskListComponent } from '../task-list.component';

@Component({
  selector: 'app-edit-task-form',
  templateUrl: './edit-task-form.component.html',
  styleUrls: ['./edit-task-form.component.css']
})
export class EditTaskFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TaskListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  taskForm: FormGroup;
  units = ['minutes', 'hours', 'days', 'months'];
  states = ['Onhold', 'In-Progress', 'Complete'];

  ngOnInit(): void {

    if (this.data.row) {
      console.log(this.data.row)
      this.taskForm = new FormGroup({
        name: new FormControl(this.data.row.name, Validators.required),
        description: new FormControl(this.data.row.description, Validators.required),
        estimate: new FormControl(this.data.row.estimate, Validators.required),
        estimateUnit: new FormControl(this.data.row.estimateUnit, Validators.required),
        state: new FormControl(this.data.row.state, Validators.required)
      });
    }
  }

  onSubmit(taskForm) {
    this.dialogRef.close({
      id: this.data.row.id,
      name: taskForm.value.name,
      description: taskForm.value.description,
      estimate: taskForm.value.estimate,
      estimateUnit: taskForm.value.estimateUnit,
      state: taskForm.value.state
    })
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
