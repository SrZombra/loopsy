import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  public loadProducts(){
    return this.http.get<ProductsModule[]>(`${this.baseUrl.url}/Dx5muDeFg3JicHbFuRMU`, this.setHeader());
  }

  public loadBasicData(){
    return this.http.get(`${this.baseUrl.url}/kCRDuPRcMY8FhuGeReSQ`, this.setHeader())
  }

  public createProduct(data){
    return this.http.post(`${this.baseUrl.url}/c180tfxoLcWRTeYVRQpY`, data, this.setHeader())
  }

}
