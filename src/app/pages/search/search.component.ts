import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';

// Models
import { Doctor } from '../../models/doctor.model';
import { Hospital } from '../../models/hospital.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  doctors: Doctor[] = [];
  users: User[] = [];
  hospitals: Hospital[] = [];

  constructor( public activatedRoute: ActivatedRoute,
               public _http: HttpClient ) {

    activatedRoute.params.subscribe( params => {

      const term = params['term'];
      this.search(term);

    });

   }

  ngOnInit() {
  }

  search ( term: string ) {

    const url = URL_SERVICES + '/search/all/' + term;

    this._http.get(url)
        .subscribe( (resp: any) => {
          this.doctors = resp.doctors;
          this.hospitals = resp.hospitals;
          this.users = resp.users;
        });
  }

}
