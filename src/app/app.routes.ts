import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphs1Component } from './pages/graphs1/graphs1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const aapRoutes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'progress', component: ProgressComponent},
      { path: 'graphs1', component: Graphs1Component},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( aapRoutes, { useHash: true } );
