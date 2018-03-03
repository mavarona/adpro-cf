import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Services
import { UserService } from '../user/user.service';

@Injectable()
export class SidebarService {

  menu: any = [];

  constructor( public _userService: UserService ) {}

  chargeMenu () {

    this.menu = this._userService.menu;

  }

}
