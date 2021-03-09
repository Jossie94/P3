import { Component, OnInit, NgModule, ViewEncapsulation, Inject } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { formatDate } from '@angular/common';
import {loadCldr} from '@syncfusion/ej2-base';
import {FormValidators} from '@syncfusion/ej2-angular-inputs';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { timeout } from 'q';
import { timepick } from './timepick';
import {DataService} from './../services/data.service';
import {datetime} from './datetime';



@Component({
  selector: 'app-timetablepage',
  templateUrl: './timetablepage.component.html',
  styleUrls: ['./timetablepage.component.scss'],
  encapsulation: ViewEncapsulation.None,
providers: [] 
  
})

/* @NgModule({
  declarations: [],
}) */
export class TimetablepageComponent {

 
  public booking = new timepick('jose','jose@tec.dk' )
  public dateTime = new datetime('')

  submitted = false;
//registrer dataen så service kan bruge den til sende til restapi og bruger console log for hold styr på den
  onSubmit(){
    this.submitted = true;
    console.log("before ")
    console.log(this.booking)
    this.dataservice.senddate(this.booking)
    .subscribe(      data => console.log('Success', data),
      error => console.error('Error', error)
    )
    
    console.log("middle")
    
    console.log(this.dateTime)
     this.dataservice.sendtime(this.dateTime) 
    .subscribe(
      data => console.log('Success', data),
      error => console.error('Error', error)
    )
    console.log("after")
   // this.booking = this.dataservice.getTimetablepage();
    
  }
//kalenderen som ikke bruges lige nu
  constructor(
    private dataservice: DataService,
  ) {}

  onValueChange(args: any): void {
    (<HTMLInputElement>document.getElementById('selected')).textContent = 'Selected Value: ' + args.value.toLocaleDateString();
  }

  ngOnInit() {
    
  }
} 
  
 



