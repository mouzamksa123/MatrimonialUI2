import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';



@NgModule({
  declarations: [
    HomeComponent,
    Step1Component,
    Step2Component,
    CreateProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegistrationModule { }
