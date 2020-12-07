import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule { 

  public usuario: string;
  public contrasena: string;
  public estado: number;
  public correo_electronico: string;
  public rol_id: number;

  constructor(){
    this.usuario = '';
    this.contrasena = '';
    this.estado = 0;
    this.correo_electronico = '';
    this.rol_id = 0;
  }

}
