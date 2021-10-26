import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskManagerComponent } from './task-manager.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskStatusComponent } from './task-status/task-status.component';
import { CreateTaskFormComponent } from './task-list/create-task-form/create-task-form.component'; 
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { EditTaskFormComponent } from './task-list/edit-task-form/edit-task-form.component';
import { ConfirmDeleteComponent } from './task-list/confirm-delete/confirm-delete.component';



@NgModule({
  declarations: [TaskManagerComponent, TaskListComponent, TaskStatusComponent, CreateTaskFormComponent, EditTaskFormComponent, ConfirmDeleteComponent],
  imports: [
    CommonModule,
    TaskManagerRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule
  ]
})
export class TaskManagerModule { }
