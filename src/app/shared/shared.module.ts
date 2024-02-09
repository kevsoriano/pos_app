import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    TableComponent,
    ExpansionComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ], exports: [
    TableComponent,
    ExpansionComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
