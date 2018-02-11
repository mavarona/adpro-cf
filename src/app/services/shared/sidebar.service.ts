import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      title: 'Main',
      icon: 'mdi mdi-gauge,',
      submenu: [
        {title: 'Dashboard', url: '/dashboard'},
        {title: 'ProgressBar', url: '/progress'},
        {title: 'Graphs', url: '/graphs1'}
      ]
    }
  ];

  constructor() { }

}
