import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModule } from 'src/app/models/user/user.module.js';
import { TokenService } from 'src/app/token/token.service.js';
import * as baseUrl from '../baseUrl.js';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

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

  public loadUsers(){
    return this.http.get<UserModule[]>(`${this.baseUrl.url}/user`, this.setHeader());
  }

  public addUser(data){
    return this.http.post<UserModule>(`${this.baseUrl.url}/user`, data, this.setHeader());
  }

  public updateUser(data){
    return this.http.put<UserModule>(`${this.baseUrl.url}/user`, data, this.setHeader());
  }

  public getUser(data){
    return this.http.post<UserModule>(`${this.baseUrl.url}/user/id`, data, this.setHeader());
  }

}
