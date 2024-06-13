import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberpipe',
  standalone: true
})
export class NumberPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    const lngth: number = (args.length > 0 && typeof args[0] === 'number') ? args[0] : 3
    const valStr: string = `${value}`
    if(valStr.length < lngth){
        const ldiff = lngth - valStr.length
        const pfix = "0".repeat(ldiff)
        return `${pfix}${value}`
    }

    return value

  }

}