import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../commons/services/product.service';
import { ProductDetail } from '../../models/product-detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.view.html',
  styleUrls: ['./detail.view.scss']
})
export class DetailView implements OnInit {

  productDetail!: ProductDetail;
  idProduct!: string;

  //clases inyectables en el constructor

  constructor(private route: ActivatedRoute, //para acceder a los parametros de id
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.idProduct = this.route.snapshot.params['id'];//obtiene los parametros de id
    console.log('id desde URL', this.idProduct);
    //le paso el idProduct me suscibo y espero la respuesta
    this.productService.getById(this.idProduct).subscribe(response => {
      this.productDetail = new ProductDetail(response);//con la respuesta voy a llenar pproductdetail haciendo la transformación 
      console.log('id desde URL2', this.productDetail);
    })
  }
}

