import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SwalService } from 'src/app/services/swal/swal.service';
import { CatalogsService } from 'src/app/services/catalogs/catalogs.service';
import { Catalog } from 'src/app/models/catalog/catalog';

@Component({
  selector: 'app-catalog-form',
  templateUrl: './catalog-form.component.html',
  styleUrls: ['./catalog-form.component.css']
})
export class CatalogFormComponent implements OnInit {

  public formCatalog: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    id: new FormControl(''),
    state: new FormControl(1, [Validators.required])
  });

  public title: string = '';

  constructor(
    public dialogRef: MatDialogRef<CatalogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Catalog,
    private SwalService: SwalService,
    private CatalogsService: CatalogsService
  ) {
    if(data){
      this.formCatalog.setValue({
        id: data.id,
        name: data.nombre_catalogo,
        description: data.descripcion,
        state: 1,
      });
      this.title = 'Actualizar catalogo';
      this.formCatalog.setValidators([ Validators.required ]);
    }else{
      this.title = 'Crear catalogo';
    }
  }

  submit(): void{
    this.SwalService.loading();
    this.formCatalog.controls['id'].value !== '' ? this.update() : this.create();
  }

  create(): void{
    this.CatalogsService.createCatalog(this.formCatalog.value).subscribe(
      () => this.handleResponse(),
      err => this.SwalService.error(err)
    );
  }

  update(): void{
    this.CatalogsService.updateCatalog(this.formCatalog.value).subscribe(
      () => this.handleResponse(),
      err => this.SwalService.error(err)
    );
  }


  handleResponse(): void{
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

}
