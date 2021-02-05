import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Discount } from 'src/app/models/discount/discount';
import { DiscountsService } from 'src/app/services/discounts/discounts.service';
import { SwalService } from 'src/app/services/swal/swal.service';
import { DiscountsFormComponent } from './discounts-form/discounts-form.component';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {

  data: Discount[];
  dataSource: MatTableDataSource<Discount>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private CellarsService: DiscountsService,
    private SwalService: SwalService,
    public dialog: MatDialog
  ) { 
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadCategories(): void{
    this.SwalService.loading();
    this.CellarsService.loadDiscounts().subscribe(
      data => this.handleResponse(data),
      err => this.SwalService.error(err)
    );
  }

  handleResponse(data: Discount[]): void{
    this.dataSource.data = data;
    this.SwalService.closeSwal();
  }

  openDialog(element): void{

    const dialogRef = this.dialog.open(DiscountsFormComponent, {
      data: element
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadCategories();
    });
    
  }

  setColor(capacity){
    if(capacity == 0){
      return 'red';
    }else{
      return 'green';
    }
  }

}
