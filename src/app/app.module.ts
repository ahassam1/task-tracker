import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatTableModule } from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
