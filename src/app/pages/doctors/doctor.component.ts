import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

// Models
import { Doctor } from '../../models/doctor.model';
import { Hospital } from '../../models/hospital.model';

// Services
import { DoctorService } from '../../services/doctor/doctor.service';
import { HospitalService } from '../../services/hospital/hospital.service';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';


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
               public _router: Router,
               public activatedRoute: ActivatedRoute,
               public _modalUploadService: ModalUploadService) {

                  activatedRoute.params.subscribe( params => {

                    const id = params['id'];

                    if ( id !== 'new' ) {
                      this.loadDoctor(id);
                    }

                  });

                }

  ngOnInit() {

    this._hospitalService.loadHospitals()
        .subscribe( hospitals => this.hospitals = hospitals );

    this._modalUploadService.notifications
        .subscribe( resp => {
          this.doctor.img = resp.doctor.img;
        });

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

  loadDoctor ( id: string) {

    this._doctorService.loadDoctor( id )
        .subscribe( doctor => {
          this.doctor = doctor;
          this.doctor.hospital = doctor.hospital._id;
          this.changeHospital( this.doctor.hospital );
        });

  }

  changePhoto () {

    this._modalUploadService.showModal('doctors', this.doctor._id);

  }

}
