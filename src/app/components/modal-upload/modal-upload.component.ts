import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../services/service.index';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  imageUpload: File;

  imgTemp: string;

  constructor(
    public _uploadFileService: UploadFileService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {}

  selectImage ( file: File ) {

    if ( !file ) {
      this.imageUpload = null;
      return;
    }

    if ( file.type.indexOf('image') < 0 ) {

      swal('Only images', 'The file selected is not a image', 'error');
      this.imageUpload = null;
      return;

    }

    this.imageUpload = file;

    // Pre loader of image
    const reader = new FileReader();
    const urlImageTemp = reader.readAsDataURL( file );

    reader.onloadend = () => this.imgTemp = reader.result;

  }

  uploadFile () {

    this._uploadFileService.uploadFile( this.imageUpload, this._modalUploadService.type, this._modalUploadService.id )
        .then( resp => {
          this._modalUploadService.notifications.emit( resp );
          this.closeModal();
        })
        .catch( err => {
          console.log('Error to upload image...');
        });

  }

  closeModal () {

    this.imageUpload = null;
    this.imgTemp = null;

    this._modalUploadService.hiddenModal();

  }

}
