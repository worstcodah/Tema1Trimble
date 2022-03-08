import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CWaterfallModule } from '../c-waterfall/c-waterfall.module'

@NgModule({
  declarations: [],
  imports: [CommonModule, CWaterfallModule],
  exports: [CWaterfallModule],
})
export class WaterfallModule {}
