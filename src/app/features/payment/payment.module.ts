import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list'; 

import { PaymentRoutingModule } from './payment-routing.module';
import { CartView } from './views/cart/cart.view';
import { PaymentComponent } from './payment.component';
import { OrderDetailView } from './views/order-detail/order-detail.view';



@NgModule({
  declarations: [CartView, PaymentComponent, OrderDetailView
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    MatGridListModule
  ]
})
export class PaymentModule { }
