  
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { UserModule } from 'src/app/models/user/user.module';
import { SwalService } from 'src/app/services/swal/swal.service';
import { UserApiService } from 'src/app/services/user/user-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public data: UserModule[];

  ngOnInit(){
    this.loadUsers();
    this.titleService.setTitle('Loopsy | Gestión de Usuarios');
  }

  displayedColumns: string[] = ['id', 'name', 'email', 'profile', 'action'];
  dataSource: MatTableDataSource<UserModule>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private UserApi: UserApiService,
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
    this.UserApi.loadUsers().subscribe(
      data => this.handleResponse(data),
      err => this.Swal.error(err)
    );
  }

  handleResponse(users: UserModule[]){
    this.Swal.closeSwal();    
    this.dataSource.data = users;
  }

}
