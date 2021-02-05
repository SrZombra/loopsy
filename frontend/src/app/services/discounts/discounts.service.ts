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
    return this.http.get<Discount[]>(`${this.baseUrl}/ZXGpQ10kEGKY1ALr2rYL`, this.setHeader());
  }

  public updateDiscount(data: Discount): Observable<Discount>{
    return this.http.post<Discount>(`${this.baseUrl}/We3219m96llcObfAPaZW`, data, this.setHeader());
  }

  public createDiscount(data: Discount): Observable<Discount>{
    return this.http.post<Discount>(`${this.baseUrl}/8M5GZjFdU3LYS15c0yC4`, data, this.setHeader());
  }

}
