import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }
