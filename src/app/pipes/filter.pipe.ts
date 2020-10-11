import { Pipe, PipeTransform } from '@angular/core';
import { pricelistItem } from '../shared/interfaces/interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: pricelistItem[], type: number): pricelistItem[] {
    value = value.filter(item => item.type == type)
    return value;
  }

}
