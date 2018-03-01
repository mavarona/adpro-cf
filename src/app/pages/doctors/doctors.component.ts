import { Component, OnInit } from '@angular/core';

// Models
import { Doctor } from '../../models/doctor.model';

// Services
import { DoctorService } from '../../services/service.index';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styles: []
})
export class DoctorsComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor( public _doctorService: DoctorService ) { }

  ngOnInit() {

    this.loadDoctors();

  }

  loadDoctors() {

    this._doctorService.loadDoctors()
        .subscribe( doctors => this.doctors = doctors);

  }

  searchDoctors ( term: string) {}

  createDoctor () {}

  updateDoctor ( doctor: Doctor ) {

  }

  deleteDoctor ( doctor: Doctor ) {

  }

}
