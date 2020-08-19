import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truefalase'
})
export class TruefalasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? 'Si' : 'No';
  }

}
