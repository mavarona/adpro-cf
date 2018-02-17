import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';

@Injectable()
export class UserService {

  constructor(
    public _http: HttpClient
  ) { }

  createUser ( user: User ) {

    const url = URL_SERVICES + '/user';

     return this._http.post( url, user );

  }

}
