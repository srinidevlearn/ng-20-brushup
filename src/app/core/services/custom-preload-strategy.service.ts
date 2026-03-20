import { Inject, Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadStrategyService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      const delay = route.data['delay'] || 0;

      if (delay > 0) {
        return timer(delay).pipe(switchMap(() => load()));
      }
      return load();
    }
    return of(null);
  }
}
