import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/token/auth.service';
import { TokenService } from 'src/app/token/token.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor(
    private Token: TokenService,
    private Auth: AuthService,
    private router: Router
  ) { }


  loading(){
    Swal.fire({
      title: 'Cargando...',
      heightAuto: false,
      showConfirmButton: false,
      html: '<img src="assets/img/loading.gif" style="width: 100px"></img>',
      allowOutsideClick: false,
    });
    // this.changeTitle();
  }

  changeTitle(){
    setTimeout(()=>{
      Swal.getTitle().textContent = 'Aún cargando...';
    }, 20000);
    setTimeout(()=>{
      Swal.getTitle().textContent = 'Un momento más...';
    }, 60000);
  }

  error(err){

    if(err.status === 404){
      this.error404();
    }

    if(err.status === 401){
      this.error401();
    }

    if(err.status === 500){
      this.error500();
    }

    if(err.status === 400){
      this.error400();
    }
    
  }

  private error500(){
    Swal.fire({
      title: 'Ha ocurrido un error inesperado, intentelo nuevamente',
      text: 'Error del servidor',
      icon: 'error',
      heightAuto: false,
      allowOutsideClick: false,
    });
  }

  private error400(){
    Swal.fire({
      title: 'Ha ocurrido un error inesperado, intentelo nuevamente',
      text: 'Error del servidor',
      icon: 'error',
      heightAuto: false,
      allowOutsideClick: false,
    });
  }

  private error404(){
    this.closeSwal();
    return false;
  }

  private error401(){
    Swal.fire({
      title: 'Cierre de sesión',
      text: 'Se ha superado del tiempo de espera.',
      icon: 'error',
      heightAuto: false,
      allowOutsideClick: false,
    });
    this.logout();
  }

  private logout(){
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

  closeSwal(){
    Swal.close();
  }

  success(){
    Swal.fire({
      icon: 'success',
      title: 'Exito!',
      text: 'Registrado con exito',
      heightAuto: false,
      showCancelButton: false,
      allowOutsideClick: false,
      confirmButtonText: 'Ok'
    });
  }

}
