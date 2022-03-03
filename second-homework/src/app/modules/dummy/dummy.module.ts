import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FirstDummyComponent } from 'src/app/components/first-dummy/first-dummy.component'
import { SecondDummyComponent } from 'src/app/components/second-dummy/second-dummy.component'

@NgModule({
  declarations: [FirstDummyComponent, SecondDummyComponent],
  imports: [CommonModule],
  exports: [FirstDummyComponent, SecondDummyComponent],
})
export class DummyModule {}
