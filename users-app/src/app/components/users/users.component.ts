import { Component, OnInit } from '@angular/core';
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

  constructor(
    private dataService : DataService,
    private excelService : ExcelService) { }

  ngOnInit(): void {
    this.dataService.getUsers()
      .subscribe((data : User[]) => {
        this.users = data;
      })
  }

  onDownload(){
    this.excelService.exportToExcel(this.users, "my-awesome-users")
  }
}
