import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IProductResponse } from '../../interfaces/product.interface';
import { Product } from '../../models/product.model';
import { PortalServicesModule } from './services.module';


@Injectable({
  providedIn: PortalServicesModule
})
export class ProductService {

  //private productsUrl = 'api/products';

  constructor(private http:HttpClient) { }

  getAll(): Observable<Product[]>{
    return this.http.get<IProductResponse[]>(`${environment.api}/product`)
    .pipe(
      map((originResponse : IProductResponse[]) => {//IProduct lo convierta en un objeto de la clase product
        return originResponse.map((item: IProductResponse) => new Product(item));
      }) 
    );
  }
  getById(id: string): Observable<IProductResponse>{
    return this.http.get<IProductResponse>(`${environment.api}/product/${id}`);
    
  }

  //getProduct(id: string): Observable<Product> {
    /* const url = `${this.productsUrl}/${id}`; */
    //const url = `${environment.api}/product/${id}`;
    //return this.http.get<Product>(`${environment.api}/product/${id}`);
  //}
}
