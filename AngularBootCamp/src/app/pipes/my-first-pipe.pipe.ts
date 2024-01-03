/* ••[1]••••••••••••••••••••••••• my-first-pipe.pipe.ts •••••••••••••••••••••••••••••• */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFirstPipe',
})
export class MyFirstPipePipe implements PipeTransform {
  public transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
