import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductFormComponent } from './pages/product/product-form/product-form.component';
import { ProductsComponent } from './pages/product/products/products.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { UsersComponent } from './pages/users/users/users.component';
import { AfterLoginService } from './token/after-login.service';
import { BerforeLoginService } from './token/berfore-login.service';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AfterLoginService] },
    { path: 'login', component: LoginComponent, canActivate: [BerforeLoginService] },

    { path: 'users', component: UsersComponent, canActivate: [AfterLoginService] },
    { path: 'user/update/:id', component: UserFormComponent, canActivate: [AfterLoginService] },
    { path: 'user/create', component: UserFormComponent, canActivate: [AfterLoginService] },

    { path: 'products', component: ProductsComponent, canActivate: [AfterLoginService] },
    { path: 'product/update/:id', component: ProductFormComponent, canActivate: [AfterLoginService] },
    { path: 'product/create', component: ProductFormComponent, canActivate: [AfterLoginService] },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }