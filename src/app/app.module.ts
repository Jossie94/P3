import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from '@syncfusion/ej2-angular-calendars'; 
import { appRoutingModule} from './app.routing';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page';
import { TimetablepageComponent} from './timetablepage';
//import {TimeTableModule} from './timetablepage/timetable.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UIComponent } from './ui';
import { ThankYoupageComponent } from './thank-youpage/thank-youpage.component';
import{HttpClientModule} from '@angular/common/http'


//de forskellige moduler og komponenter som bliver brugt til angular projektet

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TimetablepageComponent,
    UIComponent,
    ThankYoupageComponent,
    
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  CalendarModule,
FormsModule,
ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
