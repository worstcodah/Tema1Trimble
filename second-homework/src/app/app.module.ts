import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DummyModule } from './modules/dummy/dummy.module'
import { WaterfallModule } from './modules/waterfall/waterfall.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DummyModule, WaterfallModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
