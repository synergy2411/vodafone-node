import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { DataService } from 'src/app/services/data.service';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[];
  showForm : boolean = false;

  // ColuumnDefs : Table Header
  columnDefs = [
    {
      field : "_id", headerName : "User ID", sortable : true
    },{
      field : "name", sortable : true, filter : true
    },{
      field : "email"
    },{
      field : "isAdmin", headerName : "Admin", filter : true
    },{
      field : "age"
    }
  ]
  // rowData : []
  rowData : Array<User> = [];

  constructor(
    private dataService : DataService,
    private excelService : ExcelService
    ) { }

  ngOnInit(): void {
    this.getUser()
  }

  private getUser(){
    this.dataService.getUsers()
    .subscribe((data : User[]) => {
      this.users = data;
      this.rowData = data;
    })
  }

  onAddNewUser(){
    this.showForm = !this.showForm
  }

  onCancel(flag : boolean){
      this.showForm = flag
  }

  onSubmit(form : FormGroup){
    const {name, email, age, isAdmin} = form.value;
    this.dataService.createUser({name, email, age, isAdmin})
    .subscribe(response => {
        this.showForm = false;
        this.getUser()
      })
  }

  onDownload(){
    this.excelService.exportToExcel(this.users, "my-awesome-users")
  }
  dummyData = [
    {name : "John", dob : "21-Dec-2021"},
    {name : "James", dob : new Date("Aug 10, 1985")},
    {name : "Jenny", dob : new Date("Jul 2, 1985")},
  ]
  onDownloadDate(){
    this.excelService.exportToExcel(this.dummyData,"date-data")
  }
}
