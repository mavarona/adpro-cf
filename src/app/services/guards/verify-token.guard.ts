import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

// Rxjs
import { Observable } from 'rxjs/Observable';

// Services
import { UserService } from '../user/user.service';

@Injectable()
export class VerifyTokenGuard implements CanActivate {

  constructor ( public _userService: UserService,
                public _router: Router ) {}

  canActivate(): Promise<boolean> | boolean {

    const token = this._userService.token;

    const payload = JSON.parse( atob( token.split('.')[1] ));

    const expired = this.isExpired ( payload.exp );

    if ( expired ) {
      this._router.navigate(['/login']);
      return false;
    }

    return this.verifyRenew ( payload.exp );
  }

  private verifyRenew ( dateExp: number ): Promise<boolean> {

    return new Promise ( (resolve, reject) => {

      const tokenExp = new Date( dateExp * 1000 );
      const now = new Date();

      now.setTime ( now.getTime() + ( 4 * 60 * 60 * 1000));

      if ( tokenExp.getTime() > now.getTime()) {
        resolve (true);
      } else {
        this._userService.renewToken()
            .subscribe( () => {
              resolve(true);
            }, () => {
              this._router.navigate(['/login']);
              reject(false);
            }
          );
      }

    });

  }

  private isExpired ( dateExp: number ) {

    const now = new Date().getTime() / 1000;

    if ( dateExp < now ) {
      return true;
    } else {
      return false;
    }

  }

}
