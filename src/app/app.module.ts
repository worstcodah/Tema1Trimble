import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FourthModule } from './fourth-homework/fourth.module'
import { ThirdModule } from './third-homework/third.module'
import { SecondComponent } from './second-homework/components/second/second.component'
import { SecondModule } from './second-homework/second.module'
import { FifthComponent } from './fifth-homework/components/fifth/fifth.component'
import { FifthModule } from './fifth-homework/fifth.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FourthModule,
    ThirdModule,
    SecondModule,
    FifthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
