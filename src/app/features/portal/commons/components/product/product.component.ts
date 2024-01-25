import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { CartItem } from 'src/app/shared/models/cart.model';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;
  items! :number;

  get cartItem(): CartItem{ //estara buscando cambios constantemente 
    return this.setCartItem();
  }

  //constructor(private router:Router, public cartService: CartService) { }
  constructor(private router:Router, private cartService: CartService) { }

  ngOnInit(): void {
    console.log('producto en el presentador', this.product);
    //this.items = this.cartService.itemsInCart;
  }
  

  goToDetail(): void{
      //this.router.navigateByUrl('/portal/detail'); //para llamar con id
      this.router.navigateByUrl(`portal/detail/${this.product._id}`); //pasa la ruta con el id recuperando ese id estamoshaciendo un redirect

  }

  add():void{
    this.cartService.add(this.cartItem);
  }
  increment():void{
    this.cartService.add(this.cartItem);
  }
  decrement():void{
    this.cartService.remove(this.cartItem);
  }

  setCartItem():CartItem{ //de tipo cartItem, que es el mismo modelo de product ya que pasa una sola img así que hacemos uso de él con ely
    const cartItem : CartItem = {
      id: this.product._id,
      name: this.product.name,
      price: this.product.price,
      quantity: 1,
      image: this.product.image
    }
    return cartItem;
  }

}
