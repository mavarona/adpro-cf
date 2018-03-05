import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';

// Services
import {
  AdminGuard,
  DoctorService,
  HospitalService,
  LoginGuardGuard,
  SettingsService,
  SharedService,
  SidebarService,
  UploadFileService,
  UserService,
  VerifyTokenGuard
 } from './service.index';

import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AdminGuard,
    DoctorService,
    LoginGuardGuard,
    ModalUploadService,
    HospitalService,
    SettingsService,
    SharedService,
    SidebarService,
    UploadFileService,
    UserService,
    VerifyTokenGuard
  ],
  declarations: []
})
export class ServiceModule { }
