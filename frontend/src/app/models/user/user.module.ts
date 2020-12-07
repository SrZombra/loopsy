import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule { 

  public id: number;
  public name: string;
  public email: string;
  public password: string;
  public password_confirmation: string;
  public estado_id: number;
  public rol_id: number;

  constructor(){
    this.email = '';
    this.password = '';
    this.password_confirmation = '';
    this.estado_id = 0;
    this.rol_id = 0;
  }

}
