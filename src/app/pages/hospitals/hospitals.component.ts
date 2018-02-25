import { Component, OnInit } from '@angular/core';

// Model
import { Hospital } from '../../models/hospital.model';

// Services
import { HospitalService } from '../../services/hospital/hospital.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styles: []
})
export class HospitalsComponent implements OnInit {

  hospitals: Hospital[] = [];

  constructor(
    public _hospitalService: HospitalService
  ) { }

  ngOnInit() {

    this.loadHospitals();

  }

  loadHospitals () {


    this._hospitalService.loadHospitals( )
        .subscribe( hospitals => {

          this.hospitals = hospitals;

        });
  }

  searchHospitals ( term: string ) {



  }

  createHospital () {



  }

  saveHospital ( hospital: Hospital ) {


  }

  deleteHospital ( hospital: Hospital ) {


  }

}
