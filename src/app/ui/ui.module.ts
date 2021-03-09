import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {UIComponent} from './ui.component';
import {NgForm} from '@angular/forms';
import {User} from './user'

@NgModule({
    declarations: [
        UIComponent,
        User
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        NgForm
    ],
    exports: [FormsModule],
    providers: [],
    bootstrap: [UIComponent]
})
export class UIModule {}

