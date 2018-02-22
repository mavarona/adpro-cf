import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      title: 'Main',
      icon: 'mdi mdi-gauge,',
      submenu: [
        {title: 'Dashboard', url: '/dashboard'},
        {title: 'Graphs', url: '/graphs1'},
        {title: 'ProgressBar', url: '/progress'},
        {title: 'Promises', url: '/promises'},
        {title: 'Rxjs', url: '/rxjs'},
      ]
    },
    {
      title: 'maintenance',
      icon: 'mdi mdi-folder-lock-open',
      submenu: [
        { title: 'Users', url: '/users' },
        { title: 'Hospitals', url: '/hospitals' },
        { title: 'Doctors', url: '/doctors' }
      ]
    }
  ];

  constructor() { }

}
