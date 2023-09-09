import { ResolveFn, Routes } from '@angular/router';
import { OrderListComponent } from './features/order-list/order-list.component';
import { OrderEditComponent } from './features/order-edit/order-edit.component';
import { delay, of } from 'rxjs';

// Example
// https://www.positronx.io/angular-route-resolvers/
const routeResolver: ResolveFn<string> = () => {
  return of('Dummy Schema').pipe(delay(4000));
};

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: OrderListComponent,
    resolve: {
      schema: routeResolver
    }
  },
  {
    path: 'edit/:orderId',
    component: OrderEditComponent,
    resolve: {
      schema: routeResolver
    }
  }
];
