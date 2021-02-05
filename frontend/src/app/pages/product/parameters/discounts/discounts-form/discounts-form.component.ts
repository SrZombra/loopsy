import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Discount } from 'src/app/models/discount/discount';
import { SwalService } from 'src/app/services/swal/swal.service';
import { DiscountsService } from 'src/app/services/discounts/discounts.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-discounts-form',
  templateUrl: './discounts-form.component.html',
  styleUrls: ['./discounts-form.component.css']
})
export class DiscountsFormComponent implements OnInit {

  public formDiscount: FormGroup = new FormGroup({
    id: new FormControl(''),
    percentaje: new FormControl('', [ Validators.required ]),
    capacity: new FormControl('', [ Validators.required ]),
    date_ini: new FormControl({ value: new Date(), disabled: true }, [Validators.required]),
    date_end: new FormControl({ value: this.sumDay(), disabled: true }, [Validators.required]),
    state: new FormControl(1, [Validators.required]),
  });

  public title: string = '';

  constructor(
    public dialogRef: MatDialogRef<DiscountsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Discount,
    private SwalService: SwalService,
    private DiscountsService: DiscountsService,
    private datepipe: DatePipe,
  ) {
    if(data){
      this.formDiscount.setValue({
        id: data.id,
        percentaje: data.porcentaje,
        date_ini: new Date(data.fecha_inicio),
        date_end: new Date(data.fecha_limite),
        state: 1,
        capacity: data.capacidad
      });
      this.title = 'Actualizar descuento';
      this.formDiscount.setValidators([ Validators.required ]);
    }else{
      this.title = 'Crear descuento';
    }
  }

  submit(): void{
    this.SwalService.loading();
    this.formDiscount.controls['id'].value !== '' ? this.update() : this.create();
  }

  create(): void{
    this.formDiscount.controls['date_ini'].setValue(this.datepipe.transform(this.formDiscount.controls['date_ini'].value, 'yyyy-MM-dd hh:mm:ss'));
    this.formDiscount.controls['date_end'].setValue(this.datepipe.transform(this.formDiscount.controls['date_end'].value, 'yyyy-MM-dd hh:mm:ss'));
    this.DiscountsService.createDiscount(this.formDiscount.getRawValue()).subscribe(
      () => this.handleResponse(),
      err => this.SwalService.error(err)
    );
  }

  update(): void{
    this.formDiscount.controls['date_ini'].setValue(this.datepipe.transform(this.formDiscount.controls['date_ini'].value, 'yyyy-MM-dd hh:mm:ss'));
    this.formDiscount.controls['date_end'].setValue(this.datepipe.transform(this.formDiscount.controls['date_end'].value, 'yyyy-MM-dd hh:mm:ss'));
    this.DiscountsService.updateDiscount(this.formDiscount.getRawValue()).subscribe(
      () => this.handleResponse(),
      err => this.SwalService.error(err)
    );
  }


  handleResponse(): void{
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

  compareSelect(object1, object2){
    return object1 && object2 && object1.id == object2.id;
  }

  sumDay(){
    let date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  }

}
