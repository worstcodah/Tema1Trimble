import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[redBackground]',
})
export class CustomDirective {
  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.style.background = 'red'
  }
}
