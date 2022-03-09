import { Directive, ElementRef } from '@angular/core'

//Color parameter, rename selector
@Directive({
  selector: '[redBackground]',
})
export class CustomDirective {
  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.style.background = 'red'
  }
}
