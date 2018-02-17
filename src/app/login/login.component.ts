import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { User } from '../models/user.model';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rememberme: boolean = false;
  email: string;

  constructor ( public router: Router,
                public _userService: UserService ) { }

  ngOnInit() {
    init_plugins();

    this.email = localStorage.getItem('email') || '';

    if ( this.email.length > 1 ) {
      this.rememberme = true;
    }

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
