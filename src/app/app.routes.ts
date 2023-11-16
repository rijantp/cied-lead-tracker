import { Routes } from '@angular/router'
import { authGuard } from './shared/guards/auth.guard'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'login',

    loadComponent: () =>
      import('./auth/auth.component').then((m) => m.AuthComponent),
  },
]
