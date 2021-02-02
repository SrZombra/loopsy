import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/token/token.service';
import { url } from 'src/app/services/baseUrl';
import { Catalog } from 'src/app/models/catalog/catalog';

@Injectable({
  providedIn: 'root'
})
export class CatalogsService {

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

  public loadCatalogs(){
    return this.http.get<Catalog[]>(`${this.baseUrl}/VlaDKnSloeQf1OZ5T8VI`, this.setHeader());
  }

  public updateCatalog(data: Catalog){
    return this.http.post<Catalog>(`${this.baseUrl}/OmXQy8ACoUZEK6CDFWzI`, data, this.setHeader());
  }

  public createCatalog(data: Catalog){
    return this.http.post<Catalog>(`${this.baseUrl}/shsabfGoSXsVg88PKRr7`, data, this.setHeader());
  }

}
