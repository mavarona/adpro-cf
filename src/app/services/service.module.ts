import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Services
import {
  SettingsService,
  SharedService,
  SidebarService,
  UserService
 } from './service.index';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UserService
  ],
  declarations: []
})
export class ServiceModule { }
