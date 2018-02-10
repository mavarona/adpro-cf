
// Module
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphs1Component } from './graphs1/graphs1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations: [
    DashboardComponent,
    Graphs1Component,
    PagesComponent,
    ProgressComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ],
  exports: [
    DashboardComponent,
    Graphs1Component,
    PagesComponent,
    ProgressComponent
  ]
})

export class PagesModule { }
