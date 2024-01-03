/* ••[1]••••••••••••••••••••••••• my-first-pipe.pipe.spec.ts •••••••••••••••••••••••••••••• */

import { MyFirstPipePipe } from './my-first-pipe.pipe';

describe('MyFirstPipePipe', (): void => {
  it('create an instance', (): void => {
    const pipe: MyFirstPipePipe = new MyFirstPipePipe();
    expect(pipe).toBeTruthy();
  });
});
