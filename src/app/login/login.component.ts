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

  constructor ( public router: Router,
                public _userService: UserService ) { }

  ngOnInit() {
    init_plugins();
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
