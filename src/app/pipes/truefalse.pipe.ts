import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truefalse'
})
export class TruefalsePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? 'Si' : 'No';
  }
}
