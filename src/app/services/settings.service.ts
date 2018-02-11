import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  setting: Setting = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor( @Inject(DOCUMENT) private _document ) {

    this.getSetting();

  }

  saveSetting () {

    localStorage.setItem('setting', JSON.stringify( this.setting ));

  }

  getSetting () {

    this.setting = JSON.parse( localStorage.getItem('setting') );

    this.applyTheme( this.setting.theme );

  }

  applyTheme ( theme: string ) {

    const url: string = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);

    this.setting.theme = theme;
    this.setting.themeUrl = url;

    this.saveSetting();

  }


}

interface Setting {
  themeUrl: string;
  theme: string;
}
