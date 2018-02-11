
// Module
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// Ng2-charts
import { ChartsModule } from 'ng2-charts';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphDonaComponent } from '../components/graph-dona/graph-dona.component'
import { Graphs1Component } from './graphs1/graphs1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

// Routes
import { PAGES_ROUTES } from './pages.routes';
import { IncrementComponent } from '../components/increment/increment.component';

@NgModule({
  declarations: [
    DashboardComponent,
    GraphDonaComponent,
    Graphs1Component,
    IncrementComponent,
    PagesComponent,
    ProgressComponent
  ],
  imports: [
    ChartsModule,
    FormsModule,
    PAGES_ROUTES,
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
