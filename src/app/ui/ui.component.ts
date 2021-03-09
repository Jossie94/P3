import { Component, OnInit,  } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormArray, FormControl} from '@angular/forms';
import { User } from './user';



@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
  exportAs: 'UI'
})
export class UIComponent implements OnInit {

  userModel = new User('jose', 'jose@tec.dk');

  submitted = false;



onSubmit(){
  this.submitted = true;
  console.log(this.userModel);
}



  ngOnInit()  {

  }
}
