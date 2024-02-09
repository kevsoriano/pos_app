import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  tableColumns: string[] = ['Id', 'First Name', 'Last Name', 'Email', 'Actions']
  tableData: any = [
    { 
      'id': 1,
      'firstName': 'Kevin',
      'lastName': 'Soriano',
      'email': 'kevinsoriano173@gmail.com'
    },
    { 
      'id': 2,
      'firstName': 'Avic',
      'lastName': 'Organista',
      'email': 'kevinsoriano173@gmail.com'
    },
  ];
  currentPage = 0;
  totalPages=2;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadData({page: this.currentPage, limit: 1});
  }

  onPageChanged(data: {page:number, limit: number}) {
    this.loadData(data);
  }

  onPageSizeChanged(data: {page:number, limit: number}) {
    this.loadData(data);
  }

  loadData(data: {page:number, limit: number}) {
    // this.userService.getUsersByPageAndLimit(data.page, data.limit).subscribe(response => {
    //   this.userList = response;
    //   this.totalPages = Math.ceil(response.length/data.limit);
    // });
  }

  addUser() {
    this.router.navigate(['/users/add']);
  }
}
