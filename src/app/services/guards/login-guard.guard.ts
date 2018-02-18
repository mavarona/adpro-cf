import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { ReturnStatement } from '@angular/compiler';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor ( public _userService: UserService,
                public _router: Router ) {}

  canActivate () {

    if ( this._userService.isLogged() ) {
      console.log('PASS THE GUARD');
      return true;
    } else {
      this._router.navigate(['/login']);
      console.log('BLOCKED THE GUARD');
      return false;
    }

  }

}
