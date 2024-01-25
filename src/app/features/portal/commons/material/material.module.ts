import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {  MatInput, MatInputModule } from '@angular/material/input';





@NgModule({
  exports: [MatCardModule, MatButtonModule, MatInputModule],
})
export class MaterialModule { }
