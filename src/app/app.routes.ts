import { Routes } from '@angular/router';
import { RouteNames } from './route-util';
import { canActivateFnGaurd } from './core/gaurds/can-activate-gaurd-fn-guard';

export const routes: Routes = [
    {path: '', redirectTo: `/${RouteNames.login}`, pathMatch: 'full'},

    {
        path: 'features',
       loadComponent() {
            return import('./layout/layout.component').then(m => m.LayoutComponent);
       },
       children: [
        {    path: RouteNames.signalsBasic,
            loadComponent: () => import('./features/signal-basic/signal-basic').then(m => m.SignalBasic),
            data: {preload: true, delay: 0}
        },
       ],
        canActivateChild: [canActivateFnGaurd],
        // data: {preload: true, delay: 2000}
    },
    {path: RouteNames.login, 
        loadComponent: () => import('./features/login/login').then(m => m.Login),
        data: {preload: true, delay: 0}
    },
];
