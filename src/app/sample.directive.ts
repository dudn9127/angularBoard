import {Directive, ElementRef} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[custom]'
})
export class SampleDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }

}
