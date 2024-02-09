import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  tableColumns: string[] = []
  @Input()
  tableData: any = [];
  @Input()
  isExpandable: boolean = false;

  ngOnInit() {
    this.tableData.forEach((_tableData: { isExpanded: boolean; }) => {
      _tableData.isExpanded = false;
    });
  }

  // do not display .isExpanded property in UI 
  get keySize() {
    return Object.keys(this.tableData[0]).length - 1;
  }

  // comparer function for keyvalue pipe
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

  // TODO: collapse expanded records when selecting a new row
  // openRecords = false;
  // indexSelectedCoverage = 1;

  // selectItemRecords(index: number) {
  //   this.openRecords = this.openRecords && this.indexSelectedRecord === index ? false : true;
  //   this.indexSelectedRecord = index;
  // }
}
