import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  user: User;
  token: string;

  constructor(
    public _http: HttpClient,
    public _router: Router
  ) {
  }

  isLogged () {

    this.chargeStorage();
    return (this.token.length > 5) ? true : false;

  }

  chargeStorage () {

    if ( localStorage.getItem('token') ) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.token = '';
      this.user = null;
    }

  }

  saveStorage ( id: string, token: string, user: User ) {

    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.user = user;
    this.token = token;

  }

  logout () {

    this.user = null;
    this.token = '';

    localStorage.removeItem('user');
    localStorage.removeItem('token');

    this._router.navigate(['/login']);

  }

  loginGoogle ( token: string ) {

    const url = URL_SERVICES + '/login/google';

    return this._http.post( url, { token } )
               .map( (resp: any ) => {
                 this.saveStorage(resp.id, resp.token, resp.user);
                 return true;
               });

  }

  login ( user: User, rememberme: boolean = false ) {

    if ( rememberme ) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }

    const url = URL_SERVICES + '/login';
    return this._http.post ( url, user )
               .map( (resp: any) => {

                localStorage.setItem('id', resp.id);
                localStorage.setItem('token', resp.token);
                localStorage.setItem('user', JSON.stringify(resp.user));

                return true;

               });

  }

  createUser ( user: User ) {

    const url = URL_SERVICES + '/user';

     return this._http.post( url, user )
            .map( (resp: any) => {
              swal('User Create: ', user.email, 'success');
              return resp.user;
            });

  }

  updateUser ( user: User ) {

    let url = URL_SERVICES + '/user/' + user._id;
    url += '?token=' + this.token;

    return this._http.put( url, user )
               .map( (resp: any) => {

                const userDB: User = resp.user;
                this.saveStorage ( userDB._id, this.token, userDB );
                swal('User Update: ', user.name, 'success');

                return true;

               });
  }

}
