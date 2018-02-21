import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { LoginGuardGuard } from './guards/login-guard.guard';

// Services
import {
  SettingsService,
  SharedService,
  SidebarService,
  UploadFileService,
  UserService
 } from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UploadFileService,
    UserService,
    LoginGuardGuard
  ],
  declarations: []
})
export class ServiceModule { }
