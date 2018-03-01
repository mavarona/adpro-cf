
// Module
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';

// Ng2-charts
import { ChartsModule } from 'ng2-charts';

// Components
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './doctors/doctor.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { GraphDonaComponent } from '../components/graph-dona/graph-dona.component';
import { Graphs1Component } from './graphs1/graphs1.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { IncrementComponent } from '../components/increment/increment.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgressComponent } from './progress/progress.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { UsersComponent } from './users/users.component';

// Routes
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations: [
    AccountSettingsComponent,
    DashboardComponent,
    DoctorComponent,
    DoctorsComponent,
    GraphDonaComponent,
    Graphs1Component,
    HospitalsComponent,
    IncrementComponent,
    ModalUploadComponent,
    PagesComponent,
    ProfileComponent,
    ProgressComponent,
    PromisesComponent,
    RxjsComponent,
    UsersComponent
  ],
  imports: [
    ChartsModule,
    CommonModule,
    FormsModule,
    PAGES_ROUTES,
    PipesModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    Graphs1Component,
    PagesComponent,
    ProgressComponent
  ]
})

export class PagesModule { }
