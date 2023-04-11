import { Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumnDefinition } from './table.interface';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> {
  @ViewChild(MatSort) sort!: MatSort;

  @Input() showLoading = false;
  @Input() set columns(value: TableColumnDefinition<T>[]) {
    this.columnsToDisplay = value;
    this.displayedColumns = this.columnsToDisplay.map((c) => c.columnDef);
  }
  @Input() set data(value: T[]) {
    this.dataSource = new MatTableDataSource(value);
    this.dataSource.sort = this.sort;
  }
  @Input() set filter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  dataSource: MatTableDataSource<T> = new MatTableDataSource();
  columnsToDisplay: TableColumnDefinition<T>[] = [];
  displayedColumns: string[] = [];
}
