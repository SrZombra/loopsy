import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as url from '../services/baseUrl.js';

import { BehaviorSubject, of, Subscription } from "rxjs";
import { delay } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private expire = new BehaviorSubject<any>(0);
  expired = this.expire.asObservable();

  public baseUrl = url.url;
  private iss = {
    login: `${this.baseUrl}/login`,
    signup: `${this.baseUrl}/user`
  };
  timeout: number;
  tokenSubscription = new Subscription();
  constructor(
    private jwtHelper: JwtHelperService,
    private router: Router,
    private idle: Idle,
  ) { }  

  handle(token) {
    this.set(token);
  }

  processIdle(){
    this.idle.setIdle(180);

    this.idle.setTimeout(5);

    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onTimeout.subscribe(() => {
      this.expire.next(true);
    });

    this.reset();

  }

  reset() {
    this.idle.watch();
  }

  set(token) {
    // this.timeout = this.jwtHelper.getTokenExpirationDate(token).valueOf() - new Date().valueOf();
    this.processIdle();
    // this.expirationCounter(this.timeout);
    localStorage.setItem('token', token);
  }

  expirationCounter(timeout) {
    this.tokenSubscription.unsubscribe();
    this.tokenSubscription = of(null).pipe(delay(timeout)).subscribe((expired) => {
      this.remove();
      this.router.navigate(["/login"]);
    });
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    this.idle.stop();
    localStorage.removeItem('token');
    // this.http.post(`${this.baseUrl}/logout`, [], header).subscribe();
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return true
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    console.log(this.isValid());
    return this.isValid();
  }

}
