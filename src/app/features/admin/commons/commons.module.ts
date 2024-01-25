import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminServicesModule } from './services/services.module';



@NgModule({
  exports: [
    AdminServicesModule,
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AdminCommonsModule { }
