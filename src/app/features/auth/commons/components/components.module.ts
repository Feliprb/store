import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    SignInFormComponent
  ],
  exports: [SignInFormComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AuthComponentsModule { }
