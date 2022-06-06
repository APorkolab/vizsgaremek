import { Component, Input, OnInit } from '@angular/core';

export interface INgxTableColumn {
  title: string;
  key: string;
}

@Component({
  selector: 'ngx-data-table',
  templateUrl: './ngx-data-table.component.html',
  styleUrls: ['./ngx-data-table.component.scss'],
})
export class NgxDataTableComponent<T extends { [x: string]: any }>
  implements OnInit
{
  @Input() list: T[] = [];
  @Input() columns: INgxTableColumn[] = [];
  pageSize: number = 25;

  startSlice: number = 0;
  endSlice: number = 25;
  page: number = 1;

  get pageList(): number[] {
    const pageSize = Math.ceil(this.list.length / this.pageSize);
    return new Array(pageSize).fill(1).map((x, i) => i + 1);
  }

  columnKey: string = '';
  sortDir: number = -1;

  onColumnSelect(key: string): void {
    this.columnKey = key;
    this.sortDir = this.sortDir * -1;
  }

  constructor() {}

  ngOnInit(): void {}

  jumptoPage(pageNum: number): void {
    this.page = pageNum;
    this.startSlice = this.pageSize * (pageNum - 1);
    this.endSlice = this.startSlice + this.pageSize;
  }
}
