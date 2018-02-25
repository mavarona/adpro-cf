import { Component, OnInit } from '@angular/core';

declare var swal: any;

// Model
import { Hospital } from '../../models/hospital.model';

// Services
import { HospitalService } from '../../services/hospital/hospital.service';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styles: []
})
export class HospitalsComponent implements OnInit {

  hospitals: Hospital[] = [];

  constructor(
    public _hospitalService: HospitalService,
    public _modalUpdateService: ModalUploadService
  ) { }

  ngOnInit() {

    this.loadHospitals();

    this._modalUpdateService.notofications
        .subscribe( () => this.loadHospitals() );
  }

  loadHospitals () {


    this._hospitalService.loadHospitals( )
        .subscribe( hospitals => {

          this.hospitals = hospitals;

        });
  }

  searchHospitals ( term: string ) {

    if ( term.length <= 0 ) {
      this.loadHospitals();
      return;
    }

    this._hospitalService.searchHospital ( term )
        .subscribe( hospitals => this.hospitals = hospitals );

  }

  createHospital () {

    swal({
      title: 'Create hospital',
      text: 'Enter the name of the hospital',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true
    }).then( (val: string) => {

      if ( !val || val.length === 0 ){
        return;
      }

      this._hospitalService.createHospital( val )
          .subscribe( () => this.loadHospitals() );

    });

  }

  saveHospital ( hospital: Hospital ) {

    this._hospitalService.updateHospital( hospital )
        .subscribe();
  }

  deleteHospital ( hospital: Hospital ) {

    this._hospitalService.deleteHospital ( hospital._id )
        .subscribe( () => this.loadHospitals() );

  }

  updateImage (hospital: Hospital) {

    this._modalUpdateService.showModal( 'hospitals', hospital._id );

  }

}
