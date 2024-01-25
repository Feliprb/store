import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field'; 
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductListView } from './views/product-list/product-list.view';
import { ProductCreateView } from './views/product-create/product-create.view';
import { AdminComponent } from './admin.component';
import { AdminCommonsModule } from './commons/commons.module';
import { SharedModule } from 'src/app/shared/shared.module';
//import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    ProductListView,
    ProductCreateView,
    AdminComponent,
    
  ],
  imports: [
    SharedModule,
    CommonModule,
    AdminRoutingModule,
    AdminCommonsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [
    MatSnackBar,
    //{ provide: MatSnackBarRef, useValue: {} },
    { provide: MAT_SNACK_BAR_DATA, useValue: {} },
    //{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class AdminModule { }
