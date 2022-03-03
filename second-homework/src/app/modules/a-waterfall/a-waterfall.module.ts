import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AComponent } from 'src/app/components/a/a.component'

@NgModule({
  declarations: [AComponent],
  imports: [CommonModule],
  exports: [AComponent],
})
export class AWaterfallModule {}
