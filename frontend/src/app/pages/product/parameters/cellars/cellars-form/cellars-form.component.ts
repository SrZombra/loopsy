import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cellar } from 'src/app/models/cellar/cellar';
import { SwalService } from 'src/app/services/swal/swal.service';
import { CellarsService } from 'src/app/services/cellars/cellars.service';
import { TypeCellar } from 'src/app/models/typeCellar/type-cellar';
import { TypeCellarsService } from 'src/app/services/typeCellars/type-cellars.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cellars-form',
  templateUrl: './cellars-form.component.html',
  styleUrls: ['./cellars-form.component.css']
})
export class CellarsFormComponent implements OnInit {

  public formCellar: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    id: new FormControl(''),
    type: new FormControl('', [ Validators.required ]),
    state: new FormControl(1, [Validators.required]),
    date: new FormControl({ value: new Date(), disabled: true }, [Validators.required]),
  });

  public title: string = '';
  public typeCellars: TypeCellar[] = [];

  constructor(
    public dialogRef: MatDialogRef<CellarsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cellar,
    private SwalService: SwalService,
    private CellarsService: CellarsService,
    private TypeCellarsService: TypeCellarsService,
    private datepipe: DatePipe,
  ) {
    if(data){
      this.formCellar.setValue({
        id: data.id,
        name: data.nombre,
        type: data.tipo,
        state: 1,
        date: new Date(data.fecha_control),
      });
      this.title = 'Actualizar bodega';
      this.formCellar.setValidators([ Validators.required ]);
    }else{
      this.title = 'Crear bodega';
    }
  }

  submit(): void{
    this.SwalService.loading();
    this.formCellar.controls['id'].value !== '' ? this.update() : this.create();
  }

  create(): void{
    this.formCellar.controls['date'].setValue(this.datepipe.transform(this.formCellar.controls['date'].value, 'yyyy-MM-dd hh:mm:ss'));
    this.CellarsService.createCellar(this.formCellar.getRawValue()).subscribe(
      () => this.handleResponse(),
      err => this.SwalService.error(err)
    );
  }

  update(): void{
    this.formCellar.controls['date'].setValue(this.datepipe.transform(this.formCellar.controls['date'].value, 'yyyy-MM-dd hh:mm:ss'));
    this.CellarsService.updateCellar(this.formCellar.getRawValue()).subscribe(
      () => this.handleResponse(),
      err => this.SwalService.error(err)
    );
  }


  handleResponse(): void{
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.loadTypeCellars();
  }

  loadTypeCellars(): void {
    this.SwalService.loading();
    this.TypeCellarsService.loadTypeCellars().subscribe(
      data => { 
        this.typeCellars = data;
        this.SwalService.closeSwal();
      },
      err => this.SwalService.error(err),
    );
  }

  compareSelect(object1, object2){
    return object1 && object2 && object1.id == object2.id;
  }

}
