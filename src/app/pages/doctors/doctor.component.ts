import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Models
import { Hospital } from '../../models/hospital.model';

// Services
import { DoctorService } from '../../services/doctor/doctor.service';
import { HospitalService } from '../../services/hospital/hospital.service';
import { Doctor } from '../../models/doctor.model';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: []
})
export class DoctorComponent implements OnInit {

  hospitals: Hospital[] = [];
  doctor: Doctor = new Doctor();

  constructor( public _doctorService: DoctorService,
               public _hospitalService: HospitalService ) { }

  ngOnInit() {

    this._hospitalService.loadHospitals()
        .subscribe( hospitals => this.hospitals = hospitals );

  }

  saveDoctor ( f: NgForm ) {

    if ( f.invalid ) {
      return;
    }

    this._doctorService.saveDoctor( this.doctor )
        .subscribe( );

  }

}
