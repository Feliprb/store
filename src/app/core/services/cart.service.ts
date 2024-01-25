import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from 'src/app/shared/models/cart.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart!: CartItem[];
  //itemsInCart: number = 10;
  itemsInCart: Subject<number> = new Subject<number>(); //notificación carro de compras (0bserver)
  quantity: number = 0;

  constructor(private storageService: StorageService) { }

  /* addItem(id:string,quantity:number):void {
    //this.cart = JSON.parse(localStorage.getItem('cart')||'{}');
    this.cart = this.storageService.getCart();
    this.cart.forEach(item =>{
      if(item.id === id){
        item.quantity = item.quantity + quantity;
      }
    });
    this.sendQuantity();//actualiza la notificación cada que se agrega un producto
    //localStorage.setItem('cart', JSON.stringify(this.cart));
    this.storageService.setCart(this.cart);
  } */
  addItem(id: string, quantity: number, name: string, price: number, image: string): void {
    console.log('entro')
    let isExist = false;
    const productData = { id, quantity, name, price, image };
    //this.cart = JSON.parse(localStorage.getItem('cart')||'{}');
    this.cart = this.storageService.getCart();
    if (this.cart && this.cart.length > 0) {
      this.cart.forEach(item => {
        if (item.id === id) {
          item.quantity = item.quantity + quantity;
          isExist = true;
        }
      });
      //console.log('addItem',this.cart);
      if (!isExist) {
        //this.cart.push(this.setCartItem());//aumentamos un product al cart //cambio de forma de realizar el push
        //this.cart.push[{id,quantity,name, price, image}];
        this.cart.push(productData);
        console.log('cartPush', this.cart);
      }
    } else {
      //this.cart = [{id, quantity,name, price, image}];
      this.cart = [productData];
      console.log('cartPush2', this.cart);
    }
    this.sendQuantity();//actualiza la notificación cada que se agrega un producto
    //localStorage.setItem('cart', JSON.stringify(this.cart));
    this.storageService.setCart(this.cart);
  }

  add(cartItem: CartItem): void {
    let isExist = false;
    //this.cart = JSON.parse(localStorage.getItem('cart')||'{}');//recuperamos el carrito
    this.cart = this.storageService.getCart();
    if (this.cart && this.cart.length > 0) {
      this.cart.forEach(item => {
        if (item.id === cartItem.id) {
          item.quantity = item.quantity + 1;
          isExist = true;
        }
      });
      if (!isExist) {
        //this.cart.push(this.setCartItem());//aumentamos un product al cart //cambio de forma de realizar el push
        this.cart.push(cartItem);
        console.log('cartPush', this.cart);
      }
    } else {
      //this.cart=[{id:this.product._id, name:this.product.name, price: this.product.price,quantity: 1}];//aumentamos un product al cart
      //this.cart=[this.setCartItem()]; //2 forma
      this.cart = [cartItem];
      console.log('cartPush2', this.cart);


    }
    this.sendQuantity();
    //localStorage.setItem('cart',JSON.stringify([]));
    //localStorage.setItem('cart', JSON.stringify(this.cart));// vuelve y se setea el 
    this.storageService.setCart(this.cart);
  }

  remove(cartItem: CartItem): void {
    //this.cart = JSON.parse(localStorage.getItem('cart')||'{}');//recuperamos el carrito
    this.cart = this.storageService.getCart();
    if (this.cart && this.cart.length > 0) {
      this.cart.forEach(item => {
        if (item.id === cartItem.id && item.quantity > 0) {
          item.quantity = item.quantity - 1;
        } else if (this.quantity === 0) {
          //this.cart = this.cart.find(item => item.id != cartItem.id)
        }
      });
    }
    this.sendQuantity();
    //localStorage.setItem('cart',JSON.stringify([]));
    //localStorage.setItem('cart', JSON.stringify(this.cart));
    this.storageService.setCart(this.cart);

  }
  private sendQuantity(): void { //no es visible hacia afuera con el private, trabaja internamente
    this.quantity = 0;
    this.cart.forEach(item => {
      this.quantity = this.quantity + item.quantity;
    });
    this.itemsInCart.next(this.quantity);
  }
}
