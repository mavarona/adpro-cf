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

  changeColor( theme: string, link: any ) {

    this.updateThemeChecked(link);
    const url: string = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);

  }

  private updateThemeChecked ( link: any ) {

    const selectors: any = document.getElementsByClassName('selector');

    for (const ref of selectors) {
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

}
