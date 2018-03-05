import { Routes, RouterModule } from '@angular/router';

// Components
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './doctors/doctor.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { Graphs1Component } from './graphs1/graphs1.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';

// Services
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { AdminGuard } from '../services/guards/admin.guard';
import { VerifyTokenGuard } from '../services/guards/verify-token.guard';

const pagesRoutes: Routes = [
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'settings themes' }},
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [ VerifyTokenGuard ],
        data: { title: 'Dashboard' }},
      { path: 'graphs1', component: Graphs1Component, data: { title: 'Graphs' }},
      { path: 'profile', component: ProfileComponent, data: { title: 'Profile' }},
      { path: 'progress', component: ProgressComponent, data: { title: 'Progress' }},
      { path: 'promises', component: PromisesComponent, data: { title: 'Promises' }},
      { path: 'rxjs', component: RxjsComponent, data: { title: 'Rxjs' }},
      { path: 'search/:term', component: SearchComponent, data: { title: 'Search' }},
      // Admin
      { path: 'doctors', component: DoctorsComponent, data: { title: 'Admin doctors' }},
      { path: 'doctor/:id', component: DoctorComponent, data: { title: 'Update doctors' }},
      { path: 'hospitals', component: HospitalsComponent, data: { title: 'Admin hospitals' }},
      { path: 'users',
        component: UsersComponent,
        canActivate: [ AdminGuard ],
        data: { title: 'Admin users' }
      },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
