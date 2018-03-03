import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

// Models
import { Doctor } from '../../models/doctor.model';
import { Hospital } from '../../models/hospital.model';

// Services
import { DoctorService } from '../../services/doctor/doctor.service';
import { HospitalService } from '../../services/hospital/hospital.service';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: []
})
export class DoctorComponent implements OnInit {

  hospitals: Hospital[] = [];
  doctor: Doctor = new Doctor('', '', '', '', '');
  hospital: Hospital = new Hospital('');

  constructor( public _doctorService: DoctorService,
               public _hospitalService: HospitalService,
               public _router: Router) { }

  ngOnInit() {

    this._hospitalService.loadHospitals()
        .subscribe( hospitals => this.hospitals = hospitals );

  }

  saveDoctor ( f: NgForm ) {

    if ( f.invalid ) {
      return;
    }

    this._doctorService.saveDoctor( this.doctor )
        .subscribe( doctor => {
          this.doctor._id = doctor._id;
          this._router.navigate(['/doctor', doctor._id]);
        });

  }

  changeHospital ( id: string ) {

    this._hospitalService.getHospital(id)
        .subscribe( (hospital: Hospital) => this.hospital = hospital );

  }

}
