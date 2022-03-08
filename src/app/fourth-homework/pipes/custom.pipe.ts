import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'customPipe',
})
export class CustomPipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value === 'string') return value + '-'
    return ''
  }
}
