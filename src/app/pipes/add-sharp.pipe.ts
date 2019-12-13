import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addSharp'
})
export class AddSharpPipe implements PipeTransform {

  transform(value: string): string {
    return value = "#" + value;
  }

}
