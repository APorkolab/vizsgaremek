import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDataTableComponent } from './ngx-data-table/ngx-data-table.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [NgxDataTableComponent],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    IconModule,
  ],
  exports: [NgxDataTableComponent],
})
export class DataTableModule {}
