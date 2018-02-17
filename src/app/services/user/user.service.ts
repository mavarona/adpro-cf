import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  user: User;
  token: string;

  constructor(
    public _http: HttpClient
  ) { }

  saveStorage ( id: string, token: string, user: User ) {

    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.user = user;
    this.token = token;

  }

  loginGoogle ( token: string ) {

    const url = URL_SERVICES + '/login/google';

    return this._http.post( url, { token } )
               .map( (resp: any ) => {
                 this.saveStorage(resp.id, resp.token, resp.User);
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

}
