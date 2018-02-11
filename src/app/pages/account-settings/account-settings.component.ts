import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( private _settings: SettingsService ) { }

  ngOnInit() {

    this.initThemeChecked();

  }

  changeColor( theme: string, link: any ) {

    this.updateThemeChecked(link);

    this._settings.applyTheme( theme );

  }

  private updateThemeChecked ( link: any ) {

    const selectors: any = document.getElementsByClassName('selector');

    for (const ref of selectors) {
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

  private initThemeChecked () {

    const selectors: any = document.getElementsByClassName('selector');

    const theme = this._settings.setting.theme;

    for (const ref of selectors) {
      if ( ref.getAttribute('data-theme') === theme ) {
        ref.classList.add('working');
        break;
      }
    }

  }

}
