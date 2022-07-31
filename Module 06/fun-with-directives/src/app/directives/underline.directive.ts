import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[underline]'
})
export class UnderlineDirective {
  @Input()
  @HostBinding('style.text-decoration-color')
  color: string = 'red';

  @HostBinding('style.text-decoration-line')
  w: string = 'underline';

  constructor() { }

}
