import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Discount } from 'src/app/models/discount/discount';
import { url } from 'src/app/services/baseUrl';
import { TokenService } from 'src/app/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class DiscountsService {

  private baseUrl = url;

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

  public loadDiscounts(): Observable<Discount[]>{
    return this.http.get<Discount[]>(`${this.baseUrl}/descuento`, this.setHeader());
  }

  public updateDiscount(data: Discount): Observable<Discount>{
    return this.http.put<Discount>(`${this.baseUrl}/descuento`, data, this.setHeader());
  }

  public createDiscount(data: Discount): Observable<Discount>{
    return this.http.post<Discount>(`${this.baseUrl}/descuento`, data, this.setHeader());
  }

}
