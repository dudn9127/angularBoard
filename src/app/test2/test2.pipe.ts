import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateformPipe'
})
export class DateFormPipe implements PipeTransform{
  // tslint:disable-next-line:typedef
  transform(value: Date) {

    return [this.setForm(value.getMonth() + 1), this.setForm(value.getDate())].join('-') + ' ' +
      [this.setForm(value.getHours()), this.setForm(value.getMinutes()), this.setForm(value.getSeconds())].join(':');

    /*return [(value.getMonth() + 1),
        value.getDate()].join('-') + ' ' +
      [value.getHours(), value.getMinutes(), value.getSeconds()].join(':');*/
  }

  // tslint:disable-next-line:typedef
  setForm(value: number) {
    return value < 10 ? '0' + value : value;
  }

}
