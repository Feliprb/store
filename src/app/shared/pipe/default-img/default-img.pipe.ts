import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'defaultImg'
})
export class DefaultImgPipe implements PipeTransform {

  transform(value: string): string {
    //return value ? value:'assets/img/default.png';//cuando es con JSON Server
    return value ? `${environment.api}/${value}` : 'assets/img/default.png';//cuando se esta utilizando base de datos pero en este solo se utilizo JSON SERVER
  }

}
