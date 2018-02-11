import { Injectable } from '@angular/core';

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
    }
  ];

  constructor() { }

}
