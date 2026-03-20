import { CanActivateFn } from '@angular/router';

export const canActivateFnGaurd: CanActivateFn = (route, state) => {
  return true;
};
