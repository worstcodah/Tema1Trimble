import { DummyRouteComponent } from './fifth-homework/components/dummy-route/dummy-route.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FifthComponent } from './fifth-homework/components/fifth/fifth.component'
import { FourthComponent } from './fourth-homework/components/fourth/fourth.component'
import { SecondComponent } from './second-homework/components/second/second.component'
import { ThirdComponent } from './third-homework/components/third/third.component'

const routes: Routes = [
  { path: '', redirectTo: 'fourth', pathMatch: 'full' },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
  { path: 'fourth', component: FourthComponent },
  {
    path: 'fifth',
    component: FifthComponent,
  },
  {
    path: 'fifth/dummy/:id',
    component: DummyRouteComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
