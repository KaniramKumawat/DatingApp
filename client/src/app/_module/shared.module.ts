import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FileUploadModule } from 'ng2-file-upload';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TimeagoModule } from "ngx-timeago";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
  }),
  NgxSpinnerModule.forRoot({
    type: 'line-scale-party'
  }),
  FileUploadModule,
  BsDatepickerModule.forRoot(),
  PaginationModule.forRoot(),
  ButtonsModule.forRoot(),
  TimeagoModule.forRoot()
  ],
  exports:[
    BsDropdownModule,
    BrowserAnimationsModule,
    ToastrModule,
    TabsModule,
    NgxSpinnerModule,
    FileUploadModule,
    BsDatepickerModule,
    PaginationModule,
    ButtonsModule,
    TimeagoModule
  ]
})
export class SharedModule { }
