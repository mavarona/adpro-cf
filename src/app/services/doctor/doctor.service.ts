import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';

@Injectable()
export class DoctorService {

  totalDoctors: number = 0;

  constructor( public _http: HttpClient ) { }

  loadDoctors () {

    const url = URL_SERVICES + '/doctor';

    return this._http.get( url )
               .map( (resp: any) => {
                 this.totalDoctors = resp.total;
                 return resp.doctors;
               });

  }

  searchDoctors ( term: string ) {

    const url = URL_SERVICES + '/search/collection/doctors/' + term;
    return this._http.get( url )
               .map( (resp: any) => resp.doctors );

  }

}
