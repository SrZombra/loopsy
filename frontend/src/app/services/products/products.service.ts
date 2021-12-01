import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from 'src/app/models/image/image.js';
import { ProductsModule } from 'src/app/models/products/products.module.js';
import { TokenService } from 'src/app/token/token.service.js';
import * as baseUrl from '../baseUrl.js';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = baseUrl;

  constructor(
    private http: HttpClient,
    private Token: TokenService
  ) { }

  private setHeader(){
    return {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.Token.get()}`)
    }
  }

  public loadProduct(data: ProductsModule){
    return this.http.post<ProductsModule>(`${this.baseUrl.url}/product/id`, data, this.setHeader());
  }

  public loadProducts(){
    return this.http.get<ProductsModule[]>(`${this.baseUrl.url}/product`, this.setHeader());
  }

  public loadBasicData(){
    return this.http.get(`${this.baseUrl.url}/product/basic-data`, this.setHeader());
  }

  public createProduct(data){
    return this.http.post(`${this.baseUrl.url}/product`, data, this.setHeader());
  }

  public updateProducto(data){
    return this.http.put(`${this.baseUrl.url}/product`, data, this.setHeader());
  }

  
  public deleteImage(Image: Image){
    return this.http.post(`${this.baseUrl.url}/product`, Image, this.setHeader());
  }

}
