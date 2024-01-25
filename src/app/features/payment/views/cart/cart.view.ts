import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';
import { IVA } from 'src/app/shared/constants/cart.enum';
import { CartItem } from 'src/app/shared/models/cart.model';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.view.html',
  styleUrls: ['./cart.view.scss']
})
export class CartView implements OnInit {

  merchantId = 508029;
  apiKey = '4Vj8eK4rloUd272L48hsrarnUA';
  referenceCode = Date.now();
  currency = 'COP';
  signature = '';
  total = 0;

  cart!: CartItem[];
  api= 'http://localhost:3000/';

  
  constructor(private storageService:StorageService) { }

  ngOnInit(): void {
    //this.cart = JSON.parse(localStorage.getItem('cart')||'');
    this.cart = this.storageService.getCart();
    this.getTotal();

    console.log('total2', this.total);
    console.log('total3', this.apiKey +'~'+ this.merchantId +'~'+ this.referenceCode +'~'+ this.total +'~'+ this.currency);
    this.signature = CryptoJS.MD5(this.apiKey +'~'+ this.merchantId +'~'+ this.referenceCode +'~'+ this.total +'~'+ this.currency).toString();
    console.log('crypto2', this.signature);


  }
  
  getSubTotal(): string{
    let suma = 0 ;
    this.cart.forEach(element =>{
      suma = suma + (element.price * element.quantity);
    });
    return suma.toString();
  }

  getTotal():string{
    const subTotal = Number(this.getSubTotal());
    let total = subTotal * IVA.iva + subTotal;
    this.total = total ;
    this.total = Number(this.total.toFixed(2)); 
    return (total).toString();
  }

  getDescripcion(): string{
    let descripcion = '' ;
    this.cart.forEach(element =>{
      descripcion = descripcion + (element.name ) +',  ';
    });
    return descripcion;
  }
 

}
