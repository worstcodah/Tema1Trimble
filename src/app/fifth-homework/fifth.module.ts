import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FifthComponent } from './components/fifth/fifth.component'
import { DummyRouteComponent } from './components/dummy-route/dummy-route.component'

@NgModule({
  declarations: [FifthComponent, DummyRouteComponent],
  imports: [CommonModule],
  exports: [FifthComponent, DummyRouteComponent],
})
export class FifthModule {}
