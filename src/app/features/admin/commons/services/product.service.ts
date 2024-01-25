import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProductResponse } from '../../interfaces/product.interface';
import { Product } from '../../models/product.model';
import { AdminServicesModule } from './services.module';

@Injectable({
  providedIn: AdminServicesModule
})
export class ProductService {

  productos!: Product[];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<IProductResponse[]>(`${environment.api}/product`)
      .pipe(
        map((originResponse: IProductResponse[]) => {//IProduct lo convierta en un objeto de la clase product
          return originResponse.map((item: IProductResponse) => new Product(item));
        })
      );
  } 

  deleteProduct(_id: string) {
    return this.http.delete(`${environment.api}/product` + `/${_id}`);
  }

   postData(url: string, body: any): Observable<any> {
    // return this.http.post(`${this.apiUrl}/${url}`, body, this.getHeaders()).pipe(

    return this.http.post(`${environment.api}/${url}`, body).pipe(
      tap(x => this.log('Registro creado')),
      catchError(this.handleError<any>('postData'))
    );
  } 

   /* postData(url: string, body:string) {
    console.log('body',body)
    return this.http.post(`${environment.api}/${url}`, body);
  }  */

  getData(url: string): Observable<any> {

    return this.http.get(`${environment.api}/${url}`).pipe(
      tap(x => this.log('Leyendo')),
      catchError(this.handleError<any>('getData'))
    );
  }

  putData(url: string, body: any): Observable<any> {
    return this.http.put(`${environment.api}/${url}`, body).pipe(
      tap(x => this.log('Registro actualizado')),
      catchError(this.handleError<any>('putData'))
    );
  }

  /* deleteData(url: string): Observable<any> {
    return this.http.delete(`${environment.api}/${url}`).pipe(
      tap(x => this.log('Registro eliminado')),
      catchError(this.handleError<any>('deleteData'))
    );
  } */

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    // this.messageService.add(message);
    // console.log(message);
  }
}
