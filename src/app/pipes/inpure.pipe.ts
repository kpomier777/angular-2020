import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inpure',
  pure: false
})
export class InpurePipe implements PipeTransform {

  transform(data: number[], args?: any): any {
    return data.filter(d => d % 2===0);
  }

}
