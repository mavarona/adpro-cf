import { Routes, RouterModule } from '@angular/router';

// Components
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphs1Component } from './graphs1/graphs1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromisesComponent } from './promises/promises.component';

const pagesRoutes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path: 'account-settings', component: AccountSettingsComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'graphs1', component: Graphs1Component},
      { path: 'progress', component: ProgressComponent},
      { path: 'promises', component: PromisesComponent},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
