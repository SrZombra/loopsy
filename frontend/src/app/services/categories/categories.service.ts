import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as baseUrl from 'src/app/services/baseUrl.js';
import { TokenService } from 'src/app/token/token.service';
import { Categorie } from 'src/app/models/categorie/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

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

  public loadCategories(){
    return this.http.get<Categorie[]>(`${this.baseUrl.url}/categoria`, this.setHeader());
  }

  public updateCategorie(data: Categorie){
    return this.http.put<Categorie>(`${this.baseUrl.url}/categoria`, data, this.setHeader());
  }

  public createCategorie(data: Categorie){
    return this.http.post<Categorie>(`${this.baseUrl.url}/categoria`, data, this.setHeader());
  }
  
}
