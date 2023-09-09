import { Injectable } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

// Example
// https://www.amadousall.com/angular-routing-how-to-display-a-loading-indicator-when-navigating-between-routes/
@Injectable({
  providedIn: 'root'
})
export class RouterListenerService {
  public navigating$: Observable<boolean>;
  private navigationChanged: BehaviorSubject<boolean>;

  constructor(router: Router) {
    this.navigationChanged = new BehaviorSubject<boolean>(false);
    router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.navigationChanged.next(true);
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.navigationChanged.next(false);
          break;
        }
        default: {
          break;
        }
      }
    });

    this.navigating$ = this.navigationChanged.asObservable();
  }
}
