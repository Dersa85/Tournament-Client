import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLeft'
})
export class TimeLeftPipe implements PipeTransform {

  transform(value: number | undefined, ...args: unknown[]): string {
    if (typeof value == 'number') {
      let returnString = '';
      const minutes = Math.floor(value / 1000 / 60);
      const seconds = Math.floor(value % (1000 * 60) / 1000);
      returnString += minutes;
      returnString += ':'
      returnString += seconds < 10 ? '0': '';
      returnString += seconds;
      return returnString;
    }
    return ''
  }
}
