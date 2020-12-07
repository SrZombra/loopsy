import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/token/auth.service';
import { JarwisService } from 'src/app/token/jarwis.service';
import { TokenService } from 'src/app/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  error: Boolean = false;

  constructor(
    private titleService: Title,
    private Jarwis: JarwisService,
    private Token: TokenService,
    private Auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Loopsy | Login");
  }

  submitForm(){
    this.error = false;
    this.Jarwis.login(this.loginForm.value).subscribe(
      data => this.handleResponse(data),
      () => this.handleError()
    );
  }

  handleError(){
    this.error = true;
  }

  handleResponse(data){
    this.Token.handle(data.token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/');
  }

}
