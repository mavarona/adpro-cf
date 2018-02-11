import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document ) { }

  ngOnInit() {
  }

  changeColor( theme: string ) {

    const url: string = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);

  }

}
