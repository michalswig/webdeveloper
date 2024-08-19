import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 100, completeWords: boolean = false, ellipsis: string = '...'): string {
    if (!value) {
      return '';
    }
    if (completeWords && value.length > limit) {
      limit = value.substring(0, limit).lastIndexOf(' ');
    }
    return `${value.substring(0, limit)}${value.length > limit ? ellipsis : ''}`;
  }
}
