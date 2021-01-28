import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Categorie } from 'src/app/models/categorie/categorie';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { SwalService } from 'src/app/services/swal/swal.service';
import { CategorieFormComponent } from './categorie-form/categorie-form.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, AfterViewInit {

  data: Categorie[];
  dataSource: MatTableDataSource<Categorie>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private CategoriesService: CategoriesService,
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
    this.CategoriesService.loadCategories().subscribe(
      data => this.handleResponse(data),
      err => this.SwalService.error(err)
    );
  }

  handleResponse(data: Categorie[]){
    this.dataSource.data = data;
    this.SwalService.closeSwal();
  }

  openDialog(element) {

    const dialogRef = this.dialog.open(CategorieFormComponent, {
      data: element
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadCategories();
    });
    
  }

}
