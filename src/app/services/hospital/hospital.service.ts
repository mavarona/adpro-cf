import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';

@Injectable()
export class HospitalService {

  totalHospitals: number = 0;

  constructor(
    public _http: HttpClient
  ) { }

  loadHospitals () {

    const url = URL_SERVICES + '/hospital';

    return this._http.get( url )
               .map( (resp: any) => {
                 this.totalHospitals = resp.total;
                 return resp.hospitals;
               });

  }

  getHospital ( id: string ) {

    const url = URL_SERVICES + '/hospital/' + id;

    return this._http.get( url )
               .map( (resp: any) => resp.hospital );

  }

}
