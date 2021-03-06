import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ReturnStatement } from '@angular/compiler';
import { UserService } from '../user/user.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor ( public _userService: UserService,
                public _router: Router ) {}

  canActivate () {

    if ( this._userService.isLogged() ) {
      return true;
    } else {
      this._router.navigate(['/login']);
      console.log('BLOCKED THE GUARD');
      return false;
    }

  }

}
