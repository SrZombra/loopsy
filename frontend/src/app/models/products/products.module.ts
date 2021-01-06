import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductsModule {

  id: string;
  nombre_producto: string;
  dato_medida: string;
  precio_unitario: string;
  cantidad: string;
  descripcion: string;
  bodega: string;
  catalogo: string;
  categoria: string;
  descuento: string;
  unidad_medida: string;
  images: [];

}
