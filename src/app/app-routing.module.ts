import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimetablepageComponent } from './timetablepage/timetablepage.component';
import { HomePageComponent} from './home-page/home-page.component';
import { UIComponent} from './ui/ui.component';
import {ThankYoupageComponent} from './thank-youpage/thank-youpage.component';

//konstant routes modul mellem components
const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'tour', component: TimetablepageComponent, children: [
    {
      path: 'tour/timeofday', component: UIComponent
    },
    {
      path: 'tour/timeofday', component: UIComponent, children: [
        {
          path: '/tour/timeofday/submit', component: ThankYoupageComponent 
        }
        
      ]

    }
  ]},
  
  
  //{ path: 'tour', redirectTo: 'timeofday'},
//redirect to homepage
  { path: '**', redirectTo: ''}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


