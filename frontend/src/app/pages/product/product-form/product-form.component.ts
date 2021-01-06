import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';
import { SwalService } from 'src/app/services/swal/swal.service';
import { ProductsModule } from 'src/app/models/products/products.module.js';
import * as baseUrl from 'src/app/services/baseUrl.js';
import { Title } from '@angular/platform-browser';
import { Image } from 'src/app/models/image/image';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  myFiles:string [] = [];
  private baseUrl = baseUrl;
  slides = [];

  public basicData = {
    bodegas: [],
    categorias: [],
    catalogos: [],
    descuentos: [],
    unidades_medida: [],
  }
  public formsend = new FormData();

  public productForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    nombre_producto: new FormControl('', [Validators.required]),
    dato_medida: new FormControl('', [Validators.required]),
    precio_unitario: new FormControl('', [Validators.required]),
    cantidad: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    bodega: new FormControl('', [Validators.required]),
    catalogo: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    descuento: new FormControl('', [Validators.required]),
    unidad_medida: new FormControl('', [Validators.required]),
    image: new FormControl(''),
  });

  constructor(
    private ProductService: ProductsService,
    private Swal: SwalService,
    private Route: Router,
    private route: ActivatedRoute,
    private titleService: Title
  ) {
  }

  ngOnInit(): void {
    this.loadBasicData();
    this.productForm.controls['id'].setValue(this.route.snapshot.paramMap.get('id'));
    if(this.productForm.controls['id'].value){
      this.loadProduct();
      this.titleService.setTitle('Loopsy | Modificar producto');
    }else{
      this.titleService.setTitle('Loopsy | Crear producto');
      this.Swal.closeSwal();
    }
  }

  loadProduct(){
    this.ProductService.loadProduct(this.productForm.value).subscribe(
      data => this.setProduct(data),
      err => this.Swal.error(err)
    );
  }

  setProduct(data: ProductsModule){
    this.Swal.closeSwal();
    this.productForm.setValue({
      id: data.id,
      nombre_producto: data.nombre_producto,
      dato_medida: data.dato_medida,
      precio_unitario: data.precio_unitario,
      cantidad: data.cantidad,
      descripcion: data.descripcion,
      bodega: data.bodega,
      catalogo: data.catalogo,
      categoria: data.categoria,
      descuento: data.descuento,
      unidad_medida: data.unidad_medida,
      image: ''
    });
    this.slides = data.images;
  }

  loadBasicData(){
    this.Swal.loading();
    this.ProductService.loadBasicData().subscribe(
      data => this.handleBasicData(data),
      err => this.Swal.error(err)
    );
  }

  handleBasicData(data){
    this.basicData = data;
  }

  compareSelect(object1: any, object2: any) {
    return object1 && object2 ? object1.id == object2.id : object1 === object2;
  }

  submitProduct(){
    this.Swal.loading();
    this.formsend = new FormData();
    for (var i = 0; i < this.myFiles.length; i++) { 
      this.formsend.append("photos[]", this.myFiles[i]);
    }
    this.setFormSend();
    this.productForm.controls['id'].value ? this.sendUpdateProduct() : this.sendCreateProduct();
  }

  sendCreateProduct(){
    this.ProductService.createProduct(this.formsend).subscribe(
      data => this.handleResponseCreate(),
      err => this.Swal.error(err)
    );
  }

  sendUpdateProduct(){
    this.ProductService.updateProducto(this.formsend).subscribe(
      data => this.handleResponseUpdate(),
      err => this.Swal.error(err)
    );
  }

  handleResponseUpdate(){
    this.Swal.success();
    this.loadProduct();
    this.productForm.controls['image'].setValue('');
  }

  handleResponseCreate(){
    this.Swal.success();
    setTimeout(() => {
      this.Route.navigateByUrl('/products');
    }, 2000);
  }

  setFormSend(){
    this.formsend.append("id", this.productForm.value.id);
    this.formsend.append("nombre_producto", this.productForm.value.nombre_producto);
    this.formsend.append("dato_medida", this.productForm.value.dato_medida);
    this.formsend.append("precio_unitario", this.productForm.value.precio_unitario);
    this.formsend.append("cantidad", this.productForm.value.cantidad);
    this.formsend.append("descripcion", this.productForm.value.descripcion);
    this.formsend.append("bodega", this.productForm.value.bodega.id);
    this.formsend.append("catalogo", this.productForm.value.catalogo.id);
    this.formsend.append("categoria", this.productForm.value.categoria.id_categoria);
    this.formsend.append("descuento", this.productForm.value.descuento.id);
    this.formsend.append("unidad_medida", this.productForm.value.unidad_medida.id);
  }

  loadImage(fileInput){
    this.myFiles = [];
    for (var i = 0; i < fileInput.target.files.length; i++) { 
      this.myFiles.push(fileInput.target.files[i]);
    }
  }

  urlToImage(value){
    return `${this.baseUrl.urlImage}${value.replace('public', 'storage')}`;
  }

  askDelete(Image: Image){
    Swal.fire({
      imageUrl: this.urlToImage(Image.url_imagen),
      imageAlt: 'A tall image',
      title: 'Eliminar imagen',
      text: '¿Está seguro de eliminar la imagen?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Aceptar`,
      denyButtonText: `No guardar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.Swal.loading();
        this.sendImageToDelete(Image);
      } else if (result.isDenied) {
        Swal.fire('Los cambios no serán aplicados.', '', 'info');
      }
    });
  }

  sendImageToDelete(Image: Image){
    this.ProductService.deleteImage(Image).subscribe(
      data => this.handleResponseDeleteProductImage(),
      err => this.Swal.error(err)
    );
  }

  handleResponseDeleteProductImage(){
    this.Swal.success();
    this.loadProduct();
  }

}
