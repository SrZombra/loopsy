import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RolModule } from 'src/app/models/rol/rol.module.js';
import { TokenService } from 'src/app/token/token.service.js';
import * as baseUrl from '../baseUrl.js';

@Injectable({
  providedIn: 'root'
})
export class RolService {

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

  public loadRoles(){
    return this.http.get<RolModule[]>(`${this.baseUrl.url}/ctwSTeTSOHVOf0dfjfoi`, this.setHeader());
  }

}
