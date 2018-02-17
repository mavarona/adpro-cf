import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(
    public _http: HttpClient
  ) { }

  login ( user: User, rememberme: boolean = false ) {

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
