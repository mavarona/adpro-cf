import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';

// Services
import {
  SettingsService,
  SharedService,
  SidebarService,
  UserService,
  LoginGuardGuard
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
    UserService,
    LoginGuardGuard
  ],
  declarations: []
})
export class ServiceModule { }
