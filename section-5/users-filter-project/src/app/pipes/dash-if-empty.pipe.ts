import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpty'
})
export class DashIfEmptyPipe implements PipeTransform {

  transform(value: any): string {
    if(value === "" || value === undefined || value === null) {
      return "-";
    }

    return value;
  }

}
