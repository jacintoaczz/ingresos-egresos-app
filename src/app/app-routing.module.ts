import { NgModule } from '@angular/core';
import { dashboardRoutes } from './features/dashboard/dashboard.routes';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AuthGuard } from './features/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: dashboardRoutes,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
