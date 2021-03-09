import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CalendarModule} from '@syncfusion/ej2-angular-calendars';
import {TimetablepageComponent} from './timetablepage.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {NgForm} from '@angular/forms'

 
//moduler brugt i timetable
 
 @NgModule({
     declarations: [TimetablepageComponent],
    
    imports: [BrowserModule, CalendarModule, CommonModule, HttpClientModule, BrowserModule, ReactiveFormsModule,FormsModule, NgForm],
    providers: [],
    bootstrap: [TimetablepageComponent] 
  }) 
 
  
  export class TimeTableModule {} 
  