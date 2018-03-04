import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

// Guards
import { LoginGuardGuard } from './services/service.index';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {
    path: '',
    component: PagesComponent,
    canActivate: [ LoginGuardGuard ],
    loadChildren: './pages/pages.module#PagesModule'
  },
  { path: '**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
