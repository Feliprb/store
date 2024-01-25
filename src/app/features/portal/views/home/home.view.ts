import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ProductService } from '../../commons/services/product.service';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss']
})
export class HomeView implements OnInit {

  products!: Product[] ;
  producto!: Product;

  constructor(private productService: ProductService) { 
    this.producto = new Product();
    this.producto._id= "68ab727al a4be3a 70c51 e1Se";
    this.producto.sku= "P003";
    this.producto.name="Alcohol Medicinal 96";
    this.producto.description= "Alcohol medicinal de 1 litro al 96% de pureza, ideal para";
    this.producto.price= 12;
    this.producto.image = "uploads/prevencion/608b727ala4be3a78c51e15c/alcohol.png";
 
  }

  ngOnInit(): void {
    //console.log('primero'this.productService.getAll());
    this.productService.getAll()
    .subscribe(
      response =>{
        this.products = response;
        console.log('products', this.products);

      },
      error => {
        console.log(error);
        if(error.status === 404){console.log('error 404')}
    }
    );
    console.log('segundo')
  }
}
