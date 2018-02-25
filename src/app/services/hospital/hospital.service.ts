import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';

// Models
import { Hospital } from '../../models/hospital.model';

// Services
import { UserService } from '../user/user.service';

@Injectable()
export class HospitalService {

  totalHospitals: number = 0;

  constructor(
    public _http: HttpClient,
    public _userService: UserService
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

  deleteHospital ( id: string ) {

    let url = URL_SERVICES + '/hospital/' + id;

    url += '?token=' + this._userService.token;

    return this._http.delete( url )
               .map( resp => swal('Hospital Deleted', 'The hospital was deleted', 'success') );

  }

  createHospital ( name: string ) {

    let url = URL_SERVICES + '/hospital';

    url += '?token=' + this._userService.token;

    return this._http.post( url, {name: name} )
               .map( (resp: any) => resp.hospital );

  }

  searchHospital ( term: string ) {

    const url = URL_SERVICES + '/search/collection/hospitals/' + term;
    return this._http.get( url )
               .map( (resp: any) => resp.hospitals );

  }

  updateHospital ( hospital: Hospital ) {

    let url = URL_SERVICES + '/hospital/' + hospital._id;
    url += '?token=' + this._userService.token;

    return this._http.put( url, hospital )
               .map( (resp: any) => {

                swal('Hospital Updated', hospital.name, 'success');

                return resp.hospital;

               });
  }

}
