import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ProductsModule } from 'src/app/models/products/products.module';
import { ProductsService } from 'src/app/services/products/products.service';
import { SwalService } from 'src/app/services/swal/swal.service';

class Routes{
  name: string;
  route: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public data: ProductsModule[];

  ngOnInit(){
    this.loadUsers();
    this.titleService.setTitle('Loopsy | Gestión de Productos');
  }

  public routesParameters: Routes[] = [
    { name: 'Roles', route: '/users' },
    { name: 'Categorias', route: '/products' },
    { name: 'Catalogos', route: '/products' },
    { name: 'Bodegas', route: '/products' },
    { name: 'Unidades medida', route: '/products' },
    { name: 'Descuentos', route: '/products' },
  ]

  displayedColumns: string[] = [
    'id', 'nombre_producto', 'cantidad', 'catalogo', 'categoria',
    'descripcion', 'descuento', 'precio_unitario',
    'dato_medida', 'bodega', 'action'
  ];
  dataSource: MatTableDataSource<ProductsModule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private ProductService: ProductsService,
    private Swal: SwalService,
    private titleService: Title
  ) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.data);
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

  loadUsers(){
    this.Swal.loading();
    this.ProductService.loadProducts().subscribe(
      data => this.handleResponse(data),
      err => this.Swal.error(err)
    );
  }

  handleResponse(users: ProductsModule[]){
    this.Swal.closeSwal();    
    this.dataSource.data = users;
  }

}
