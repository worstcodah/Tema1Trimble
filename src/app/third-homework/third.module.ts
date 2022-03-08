import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ThirdComponent } from './components/third/third.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ThirdComponent],
  exports: [ThirdComponent],
})
export class ThirdModule {}
