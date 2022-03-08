import { CComponent } from './../../components/c/c.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BWaterfallModule } from '../b-waterfall/b-waterfall.module'

@NgModule({
  declarations: [CComponent],
  imports: [CommonModule, BWaterfallModule],
  exports: [CComponent, BWaterfallModule],
})
export class CWaterfallModule {}
