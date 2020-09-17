import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value==='P'){
        return "Primary"
    }else{
      return "Secundary"
    }
  }

}
