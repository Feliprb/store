import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { ProductComponent } from './product/product.component';
import { DefaultImgModule } from 'src/app/shared/pipe/default-img/default-img.module';
import { DetailImgComponent } from './detail-img/detail-img.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  ProductComponent,
  DetailImgComponent, 
  DetailInfoComponent,
];

@NgModule({
  declarations: [...COMPONENTS],//llamado de todos los compoenentes del array
  exports: [...COMPONENTS, MaterialModule],
  imports: [
    CommonModule,
    MaterialModule,
    DefaultImgModule,
    ReactiveFormsModule
    //Módulos de shared
  ]
})
export class PortalComponentsModule { }
