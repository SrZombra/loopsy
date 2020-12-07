import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/token/auth.service';
import { TokenService } from 'src/app/token/token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedIn: boolean;

  constructor(
    private router: Router,
    private Auth: AuthService,
    private Token: TokenService,
  ) { }

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.ready(value));
  }

  toggle(drawer: MatDrawer){
    if(this.loggedIn){
      drawer.toggle();
    }
  }

  logout(){
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('login');
  }

  ready(value){
    this.loggedIn = value;
  }

}
