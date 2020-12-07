import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products/products.service';
import { SwalService } from 'src/app/services/swal/swal.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  public basicData = {
    bodegas: [],
    categorias: [],
    catalogos: [],
    descuentos: [],
    unidades_medida: [],
  }
  public formsend = new FormData();

  public productForm: FormGroup = new FormGroup({
    nombre_producto: new FormControl('', [Validators.required]),
    bodega: new FormControl('', [Validators.required]),
    catalogo: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    descuento: new FormControl('', [Validators.required]),
    unidad_medida: new FormControl('', [Validators.required]),
  });

  constructor(
    private ProductService: ProductsService,
    private Swal: SwalService,
  ) { }

  ngOnInit(): void {
    this.loadBasicData();
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
    this.Swal.closeSwal();
  }

  compareSelect(object1: any, object2: any) {
    return object1 && object2 ? object1.id == object2.id : object1 === object2;
  }

  submitProduct(){
    this.ProductService.createProduct(this.formsend).subscribe(
      data => console.log(data)
      
    );
  }

  loadImage(fileInput){
    
    if (fileInput.target.files && fileInput.target.files[0]) {

        this.formsend.append('files', fileInput.target.files);
        console.log(this.formsend);

    }
    
  }

}
