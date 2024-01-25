import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductDetail } from '../../../models/product-detail.model';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {

  formGroup: FormGroup;
  // quantity: FormControl;
  @Input() productDetail!: ProductDetail;
  productDet!: Product[];
  index = -1;

  constructor(private cartService: CartService,
    private route: ActivatedRoute, //para acceder a los parametros de id
    private productService: ProductService) {

    this.formGroup = new FormGroup({
      quantity: new FormControl()
    })
  }

  ngOnInit(): void {
    // recupero el id del producto
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID del producto rrrrr:', id); // Agregar esta línea

    // hago el llamado a todos los productos para poder obtner las imagenes y establezco el indice, para luego tener esa posicion dentro del array
    this.productService.getAll()
      .subscribe(
        response => {
          this.productDet = response;
          console.log('productDet', this.productDet);
          this.index = this.productDet.findIndex(item => item._id === id);
          console.log('indexProd', this.index);
        },
        error => {
          console.log(error);
          if (error.status === 404) { console.log('error 404') }
        }
      );
    console.log('segundo2')
  }

  addItem(): void {
    console.log('quantity', this.formGroup.get('quantity')?.value);
    const value = this.formGroup.get('quantity')?.value;
    this.cartService.addItem(this.productDetail._id, value, this.productDetail.name, this.productDetail.price, this.productDet[this.index].image);//addItem lo llamamos desde cartService
  }

}
