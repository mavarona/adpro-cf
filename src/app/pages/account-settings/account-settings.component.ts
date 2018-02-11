import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( private _settings: SettingsService ) { }

  ngOnInit() {
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

}
