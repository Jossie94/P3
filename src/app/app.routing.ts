import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent} from './home-page';
import { TimetablepageComponent} from './timetablepage';
import {UIComponent} from './ui';
import {ThankYoupageComponent} from './thank-youpage';

//routing components 
const routes: Routes = [
    { path: '', component: HomePageComponent},
    { path: 'tour', component: TimetablepageComponent},
    { path: 'tour/timeofday', component: UIComponent},
    { path: 'tour/timeofday/submit', component: ThankYoupageComponent},

    //ellers redirect til forsiden
    { path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);