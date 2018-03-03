import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// Rxjs
import { Observable } from 'rxjs/Observable';

// Services
import { UserService } from '../user/user.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor ( public _userService: UserService) {}

  canActivate () {

    if ( this._userService.user.role === 'ADMIN_ROLE' ) {
      return true;
    } else {
      console.log('blocked by Guard');
      this._userService.logout();
      return false;
    }

  }
}
