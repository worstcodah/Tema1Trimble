import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CustomPipe } from './pipes/custom.pipe'
import { FourthComponent } from './components/fourth/fourth.component'
import { CustomDirective } from './directives/custom.directive'

@NgModule({
  declarations: [CustomPipe, FourthComponent, CustomDirective],
  imports: [CommonModule],
  exports: [CustomPipe, FourthComponent],
})
export class FourthModule {}
