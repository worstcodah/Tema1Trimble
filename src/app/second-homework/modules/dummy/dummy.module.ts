import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FirstDummyComponent } from '../../components/first-dummy/first-dummy.component'
import { SecondDummyComponent } from '../../components/second-dummy/second-dummy.component'

@NgModule({
  declarations: [FirstDummyComponent, SecondDummyComponent],
  imports: [CommonModule],
  exports: [FirstDummyComponent, SecondDummyComponent],
})
export class DummyModule {}
