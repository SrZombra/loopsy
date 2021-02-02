import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Catalog } from 'src/app/models/catalog/catalog';
import { CatalogFormComponent } from './catalog-form/catalog-form.component';
import { SwalService } from 'src/app/services/swal/swal.service';
import { MatDialog } from '@angular/material/dialog';
import { CatalogsService } from 'src/app/services/catalogs/catalogs.service';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent implements OnInit {

  data: Catalog[];
  dataSource: MatTableDataSource<Catalog>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private CatalogsService: CatalogsService,
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadCategories(): void{
    this.SwalService.loading();
    this.CatalogsService.loadCatalogs().subscribe(
      data => this.handleResponse(data),
      err => this.SwalService.error(err)
    );
  }

  handleResponse(data: Catalog[]){
    this.dataSource.data = data;
    this.SwalService.closeSwal();
  }

  openDialog(element) {

    const dialogRef = this.dialog.open(CatalogFormComponent, {
      data: element
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadCategories();
    });
    
  }

}
