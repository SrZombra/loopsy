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
import { CatalogsComponent } from './pages/product/parameters/catalogs/catalogs.component';
import { CategoriesComponent } from './pages/product/parameters/categories/categories.component';
import { DiscountsComponent } from './pages/product/parameters/discounts/discounts.component';
import { MeasurementUnitsComponent } from './pages/product/parameters/measurement-units/measurement-units.component';
import { CellarsComponent } from './pages/product/parameters/cellars/cellars.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AfterLoginService] },
    { path: 'login', component: LoginComponent, canActivate: [BerforeLoginService] },

    { path: 'users', component: UsersComponent, canActivate: [AfterLoginService] },
    { path: 'user/update/:id', component: UserFormComponent, canActivate: [AfterLoginService] },
    { path: 'user/create', component: UserFormComponent, canActivate: [AfterLoginService] },

    { path: 'products', component: ProductsComponent, canActivate: [AfterLoginService] },
    { path: 'product/update/:id', component: ProductFormComponent, canActivate: [AfterLoginService] },
    { path: 'product/create', component: ProductFormComponent, canActivate: [AfterLoginService] },
    { path: 'cellars', component: CellarsComponent, canActivate: [AfterLoginService] },
    { path: 'catalogs', component: CatalogsComponent, canActivate: [AfterLoginService] },
    { path: 'categories', component: CategoriesComponent, canActivate: [AfterLoginService] },
    { path: 'discounts', component: DiscountsComponent, canActivate: [AfterLoginService] },
    { path: 'measurement-units', component: MeasurementUnitsComponent, canActivate: [AfterLoginService] },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }