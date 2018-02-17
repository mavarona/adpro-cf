import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { User } from '../models/user.model';
import { element } from 'protractor';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rememberme: boolean = false;
  email: string;

  auth2: any;

  constructor ( public router: Router,
                public _userService: UserService ) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';

    if ( this.email.length > 1 ) {
      this.rememberme = true;
    }

  }

  googleInit () {

    gapi.load('auth2', () => {

      this.auth2 = gapi.auth2.init({
        client_id: '703277670776-01dhchgj8ejh5cu1d4gci9uae9dvpqbp.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignin ( document.getElementById('btnGoogle') );

    });

  }

  attachSignin ( element ) {

    this.auth2.attachClickHandler ( element, {}, (googleUser) => {

      // const profile = googleUser.getBasicProfile();
      // console.log( profile );

      const token = googleUser.getAuthResponse().id_token;

      this._userService.loginGoogle( token )
          .subscribe( () => window.location.href = '#/dashboard');

    });

  }

  login( forma: NgForm ) {

    if ( forma.invalid ) {
      return;
    }

    const user = new User( null, forma.value.email, forma.value.password);

    this._userService.login( user, forma.value.rememberme )
        .subscribe( ressuccess => this.router.navigate(['/dashboard']));

  }

}
