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
    return this.http.get<Categorie[]>(`${this.baseUrl.url}/X6QE0A9pOy9NvfKqEPK8`, this.setHeader());
  }

  public updateCategorie(data: Categorie){
    return this.http.post<Categorie>(`${this.baseUrl.url}/8hdNP4KTDz8IID5wbj53`, data, this.setHeader());
  }

  public createCategorie(data: Categorie){
    return this.http.post<Categorie>(`${this.baseUrl.url}/g1SuieMPJ8VC5xdhKgRG`, data, this.setHeader());
  }
  
}
