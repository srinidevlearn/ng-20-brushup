import { Routes } from '@angular/router';
import { RouteNames } from '../route-util';

export const FEATURES_ROUTES: Routes = [
  {
    path: RouteNames.signalsBasic,
    loadComponent: () => import('../features/signal-basic/signal-basic').then(m => m.SignalBasic),
    data: {preload: true, delay: 0}
  }
];