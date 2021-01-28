import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

//Angular MAterial
import {DemoMaterialModule} from './material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

// File Upload
import { MatCarouselModule } from '@ngbmodule/material-carousel';


// Componentes
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users/users.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { ProductsComponent } from './pages/product/products/products.component';
import { ProductFormComponent } from './pages/product/product-form/product-form.component';
import { CellarComponent } from './pages/product/parameters/cellar/cellar.component';
import { CategoriesComponent } from './pages/product/parameters/categories/categories.component';
import { CatalogsComponent } from './pages/product/parameters/catalogs/catalogs.component';
import { DiscountsComponent } from './pages/product/parameters/discounts/discounts.component';
import { MeasurementUnitsComponent } from './pages/product/parameters/measurement-units/measurement-units.component';
import { CategorieFormComponent } from './pages/product/parameters/categories/categorie-form/categorie-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    UserFormComponent,
    ProductsComponent,
    ProductFormComponent,
    CellarComponent,
    CategoriesComponent,
    CatalogsComponent,
    DiscountsComponent,
    MeasurementUnitsComponent,
    CategorieFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgIdleKeepaliveModule.forRoot(),
    MatCarouselModule.forRoot(),
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    JwtHelperService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
