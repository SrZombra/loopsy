import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cellar } from 'src/app/models/cellar/cellar';
import { CellarsService } from 'src/app/services/cellars/cellars.service';
import { SwalService } from 'src/app/services/swal/swal.service';
import { CellarsFormComponent } from './cellars-form/cellars-form.component';

@Component({
  selector: 'app-cellars',
  templateUrl: './cellars.component.html',
  styleUrls: ['./cellars.component.css']
})
export class CellarsComponent implements OnInit {

  
  data: Cellar[];
  dataSource: MatTableDataSource<Cellar>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private CellarsService: CellarsService,
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
    this.CellarsService.loadCellars().subscribe(
      data => this.handleResponse(data),
      err => this.SwalService.error(err)
    );
  }

  handleResponse(data: Cellar[]): void{
    this.dataSource.data = data;
    this.SwalService.closeSwal();
  }

  openDialog(element): void{

    const dialogRef = this.dialog.open(CellarsFormComponent, {
      data: element
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadCategories();
    });
    
  }


}
