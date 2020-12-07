  
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModule } from 'src/app/models/user/user.module';
import { SwalService } from 'src/app/services/swal/swal.service';
import { UserApiService } from 'src/app/services/user/user-api.service';
import { RolModule } from 'src/app/models/rol/rol.module';
import { RolService } from 'src/app/services/rol/rol.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public roles: RolModule[];
  public userForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [ Validators.required, Validators.maxLength(30) ]),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    password: new FormControl(''),
    password_confirmation: new FormControl(''),
    rol_id: new FormControl(),
    estado_id: new FormControl(1)
  });

  constructor(
    private RolService: RolService,
    private Swal: SwalService,
    private UserApi: UserApiService,
    private Route: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.Swal.loading();
    this.RolService.loadRoles().subscribe(
      data => this.roles = data
    );
    this.userForm.controls['id'].setValue(this.route.snapshot.paramMap.get('id'));
    
    if(this.userForm.controls['id'].value){
      this.UserApi.getUser(this.userForm.value).subscribe(
        data => this.setUser(data),
        err => this.Swal.error(err)
      );
    }else{
      this.Swal.closeSwal();
      this.userForm.controls['password'].setValidators(Validators.required);
      this.userForm.controls['password_confirmation'].setValidators(Validators.required);
    }
  }

  compareSelect(object1: any, object2: any) {
    return object1 && object2 ? object1.id == object2.id : object1 === object2;
  }

  submitUser(){
    this.Swal.loading();
    if(this.userForm.controls['id'].value){
      this.UserApi.updateUser(this.userForm.value).subscribe(
        data => this.handleResponseCreate(data),
        err => this.Swal.error(err)
      );
    }else{
      this.UserApi.addUser(this.userForm.value).subscribe(
        data => this.handleResponseCreate(data),
        err => this.Swal.error(err)
      );
    }
  }

  handleResponseCreate(user: UserModule){
    this.Swal.success();
    setTimeout(() => {
      this.Route.navigateByUrl('/users');
    }, 2000);
  }

  setUser(data: UserModule){
    this.userForm.setValue({
      id: data.id,
      name: data.name,
      email: data.email,
      rol_id: data.rol_id,
      estado_id: data.estado_id,
      password: null,
      password_confirmation: null,
    });
    this.Swal.closeSwal();
  }

}
