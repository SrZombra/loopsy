import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeCellar } from 'src/app/models/typeCellar/type-cellar';
import { url } from 'src/app/services/baseUrl';
import { TokenService } from 'src/app/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class TypeCellarsService {

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

  public loadTypeCellars(){
    return this.http.get<TypeCellar[]>(`${this.baseUrl}/tipo-bodega`, this.setHeader());
  }
  
}
