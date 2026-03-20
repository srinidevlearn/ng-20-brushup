import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canActivateFnGaurd } from './can-activate-gaurd-fn-guard';

describe('canActivateFnGaurd', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canActivateFnGaurd(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  test('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
