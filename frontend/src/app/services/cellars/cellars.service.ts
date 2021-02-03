import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cellar } from 'src/app/models/cellar/cellar';
import { url } from 'src/app/services/baseUrl';
import { TokenService } from 'src/app/token/token.service';
import { Observable } from 'rxjs';

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

  public loadCellars(): Observable<Cellar[]>{
    return this.http.get<Cellar[]>(`${this.baseUrl}/DVv7FIl5dM69C318bPgd`, this.setHeader());
  }

  public updateCellar(data: Cellar): Observable<Cellar>{
    return this.http.post<Cellar>(`${this.baseUrl}/8KIwFdp91iYspwO5qRwF`, data, this.setHeader());
  }

  public createCellar(data: Cellar): Observable<Cellar>{
    return this.http.post<Cellar>(`${this.baseUrl}/OpWBvwAe2XlXzGHBxUYm`, data, this.setHeader());
  }

}
