import { Routes, RouterModule } from '@angular/router';

// Components
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphs1Component } from './graphs1/graphs1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';

const pagesRoutes: Routes = [
  { path: '',
    component: PagesComponent,
    canActivate: [ LoginGuardGuard ],
    children: [
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'settings themes' }},
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' }},
      { path: 'graphs1', component: Graphs1Component, data: { title: 'Graphs' }},
      { path: 'progress', component: ProgressComponent, data: { title: 'Progress' }},
      { path: 'promises', component: PromisesComponent, data: { title: 'Promises' }},
      { path: 'rxjs', component: RxjsComponent, data: { title: 'Rxjs' }},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
