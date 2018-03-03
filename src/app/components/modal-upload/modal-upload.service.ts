import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ModalUploadService {

  public type: string;

  public id: string;

  public hidden: string = 'hidden';

  public notifications = new EventEmitter<any>();

  constructor() { }

  hiddenModal () {

    this.hidden = 'hidden';
    this.type = null;
    this.id = null;

  }

  showModal ( type: string, id: string ) {

    this.hidden = '';
    this.id = id;
    this.type = type;

  }

}
