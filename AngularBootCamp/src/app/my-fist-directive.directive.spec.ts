/* ••[1]••••••••••••••••••••••••• my-fist-directive.directive.spec.ts •••••••••••••••••••••••••••••• */

import { MyFistDirectiveDirective } from './my-fist-directive.directive';

describe('MyFistDirectiveDirective', (): void => {
  it('should create an instance', (): void => {
    const directive: MyFistDirectiveDirective = new MyFistDirectiveDirective();
    expect(directive).toBeTruthy();
  });
});
