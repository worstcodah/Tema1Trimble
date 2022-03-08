import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AWaterfallModule } from '../a-waterfall/a-waterfall.module'
import { BComponent } from '../../components/b/b.component'

@NgModule({
  declarations: [BComponent],
  imports: [CommonModule, AWaterfallModule],
  exports: [BComponent, AWaterfallModule],
})
export class BWaterfallModule {}
