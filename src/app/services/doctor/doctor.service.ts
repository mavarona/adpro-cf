import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';

// Services
import { UserService } from '../user/user.service';
import { Doctor } from '../../models/doctor.model';

@Injectable()
export class DoctorService {

  totalDoctors: number = 0;

  constructor( public _http: HttpClient,
               public _userService: UserService) { }

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

  deleteDoctor ( id: string ) {

    let url = URL_SERVICES + '/doctor/' + id;

    url += '?token=' + this._doctorService.token;

    return this._http.delete( url )
               .map( resp => swal('Doctor Deleted', 'The doctor was deleted', 'success') );

  }

  saveDoctor ( doctor: Doctor ) {

    let url = URL_SERVICES + '/doctor';

    url += '?token=' + this._userService.token;

    return this._http.post ( url, doctor)
        .map( ( resp: any) => {

          swal('Doctor created', doctor.name, 'success');
          return resp.doctor;
        });

  }

}
