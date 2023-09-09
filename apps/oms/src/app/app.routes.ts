import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full'
  },
  {
    path: 'orders',
    loadChildren: () => import('@prx-sample/domains/orders').then(r => r.OrdersRoutes)
  }
];
