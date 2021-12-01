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
    return this.http.get<Catalog[]>(`${this.baseUrl}/catalogo`, this.setHeader());
  }

  public updateCatalog(data: Catalog){
    return this.http.put<Catalog>(`${this.baseUrl}/catalogo`, data, this.setHeader());
  }

  public createCatalog(data: Catalog){
    return this.http.post<Catalog>(`${this.baseUrl}/catalogo`, data, this.setHeader());
  }

}
