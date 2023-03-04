import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductLstComponent } from './product-lst/product-lst.component';
import { ReversePipe } from './reverse.pipe';
import { DateFormatPipe } from './date-format.pipe';
import { ListComponent } from './components/list/list.component';

import { FibonacciPipe } from './pipes/fibonacci.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductLstComponent,
    ReversePipe,
    DateFormatPipe,
    ListComponent,
    FibonacciPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }