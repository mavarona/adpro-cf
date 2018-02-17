import { Component, OnInit, group } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import swal from 'sweetalert';

// Services
import { UserService } from '../services/user/user.service';
import { User } from '../models/user.model';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public _userService: UserService
  ) { }

  ngOnInit() {
    init_plugins();

    this.forma = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email ]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      conditions: new FormControl(false)
    }, { validators: this.areEquals('password', 'password2')});

    this.forma.setValue({
      name: 'Test',
      email: 'test@test.com',
      password: '1234',
      password2: '1234',
      conditions: true
    });

  }

  areEquals ( field1: string, field2: string ) {

    return ( group: FormGroup ) => {

      const pass1 = group.controls[field1].value;
      const pass2 = group.controls[field2].value;

      if ( pass1 === pass2 ) {
        return null;
      }

      return {
        areEquals: true
      };

    };

  }

  registerUser () {

    if ( this.forma.invalid ) {
      return;
    }

    if ( !this.forma.value.conditions ) {
      swal('Important', 'Must to accept the conditions', 'warning');
      return;
    }

    const user = new User(
      this.forma.value.name,
      this.forma.value.email,
      this.forma.value.password
    );

    this._userService.createUser( user )
        .subscribe( resp => {
          console.log(resp);
        });

  }

}
