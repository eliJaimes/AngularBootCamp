/* ••[1]••••••••••••••••••••••••• my-first-service.service.spec.ts •••••••••••••••••••••••••••••• */

import { MyFirstServiceService } from './my-first-service.service';
import { TestBed } from '@angular/core/testing';

describe('MyFirstServiceService', (): void => {
  let service: MyFirstServiceService | undefined = undefined;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFirstServiceService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
