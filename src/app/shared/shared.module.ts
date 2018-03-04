import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';

// Components
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    RouterModule
  ],
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    ModalUploadComponent,
    NopagefoundComponent,
    SidebarComponent
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    ModalUploadComponent,
    NopagefoundComponent,
    SidebarComponent
  ]
})

export class SharedModule { }
