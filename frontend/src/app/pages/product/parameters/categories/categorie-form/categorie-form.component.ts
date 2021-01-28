import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categorie } from 'src/app/models/categorie/categorie';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SwalService } from 'src/app/services/swal/swal.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent implements OnInit {

  public formCategorie: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    id: new FormControl(''),
    state: new FormControl(1, [Validators.required])
  });

  public title: string = '';

  constructor(
    public dialogRef: MatDialogRef<CategorieFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Categorie,
    private SwalService: SwalService,
    private CategoriesService: CategoriesService
  ) {
    if(data){
      this.formCategorie.setValue({
        id: data.id_categoria,
        name: data.nombre,
        state: 1,
      });
      this.title = 'Actualizar categoria';
      this.formCategorie.setValidators([ Validators.required ]);
    }else{
      this.title = 'Crear categoria';
    }
  }

  submit(): void{
    this.SwalService.loading();
    this.formCategorie.controls['id'].value !== '' ? this.update() : this.create();
  }

  create(): void{
    this.CategoriesService.createCategorie(this.formCategorie.value).subscribe(
      () => this.handleResponse(),
      err => this.SwalService.error(err)
    );
  }

  update(): void{
    this.CategoriesService.updateCategorie(this.formCategorie.value).subscribe(
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
