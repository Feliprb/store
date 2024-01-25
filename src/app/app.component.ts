import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from './core/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'id-store';

  constructor(private storageService: StorageService){

  }
  
  /* ngOnInit():void{
    if(localStorage.getItem('cart')){ //inicializando el carrito de compras
      //localStorage.setItem('cart', JSON.stringify([]))
      this.storageService.setCart(this.cart);
    }
  } */
  ngOnInit():void{
    if(this.storageService.getCart()){ //inicializando el carrito de compras
      //localStorage.setItem('cart', JSON.stringify([]))
      this.storageService.setCart([]);
    }
  }
}
