import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import * as url from '../services/baseUrl.js';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = url.url;
  header: { headers: HttpHeaders; };

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

}
