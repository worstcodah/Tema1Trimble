import { WaterfallModule } from './modules/waterfall/waterfall.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SecondComponent } from './components/second/second.component'
import { DummyModule } from './modules/dummy/dummy.module'

@NgModule({
  declarations: [SecondComponent],
  imports: [CommonModule, WaterfallModule, DummyModule],
  exports: [WaterfallModule, SecondComponent, DummyModule],
})
export class SecondModule {}
