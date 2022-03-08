import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FourthModule } from './fourth-homework/fourth.module'
import { ThirdModule } from './third-homework/third.module'
import { SecondComponent } from './second-homework/components/second/second.component'
import { SecondModule } from './second-homework/second.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FourthModule,
    ThirdModule,
    SecondModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
