import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { FibonacciPipe } from './pipes/fibonacci.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';


@NgModule({
  declarations: [
    HighlightDirective,
    FibonacciPipe, 
    ReversePipe ,
    DateFormatPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HighlightDirective,
    FibonacciPipe, 
    ReversePipe ,
    DateFormatPipe
  ]
})
export class SharedModule { }
