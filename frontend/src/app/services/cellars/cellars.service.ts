import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cellar } from 'src/app/models/cellar/cellar';
import { url } from 'src/app/services/baseUrl';
import { TokenService } from 'src/app/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class CellarsService {

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

  public loadCellar(){
    return this.http.get<Cellar[]>(`${this.baseUrl}/VlaDKnSloeQf1OZ5T8VI`, this.setHeader());
  }

  public updateCellar(data: Cellar){
    return this.http.post<Cellar>(`${this.baseUrl}/OmXQy8ACoUZEK6CDFWzI`, data, this.setHeader());
  }

  public createCellar(data: Cellar){
    return this.http.post<Cellar>(`${this.baseUrl}/shsabfGoSXsVg88PKRr7`, data, this.setHeader());
  }

}
