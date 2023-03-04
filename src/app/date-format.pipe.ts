import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value:Date, arg:string='pppp'): any {
    return format(value,arg);
  }

}
