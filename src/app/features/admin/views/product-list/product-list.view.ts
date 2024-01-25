import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../commons/services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.view.html',
  styleUrls: ['./product-list.view.scss'],
  providers: [ProductService]

})
export class ProductListView implements OnInit {
  
  api= 'http://localhost:3000/';

  constructor(public productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
    }

  getProducts() {
    this.productService.getAll().subscribe((res) => {
      this.productService.productos = res;
    });
  }

  deleteProduct(_id: string) {
    if (confirm("Estas seguro de eliminar?")) {
      this.productService.deleteProduct(_id).subscribe((res) => {
        this.getProducts();
        //this.resetForm(form);
      });
    }
  }
 
}
