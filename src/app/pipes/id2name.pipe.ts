import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id2name'
})
export class Id2namePipe implements PipeTransform {

  transform(value: unknown, typelist): unknown {
    let q = typelist.find(i => i.id == value)
    return q.name;
  }

}
