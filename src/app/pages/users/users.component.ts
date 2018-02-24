import { Component, OnInit } from '@angular/core';

// Models
import { User } from '../../models/user.model';
import { UserService } from '../../services/service.index';
import { URL_SERVICES } from '../../config/config';
import { Subscription } from 'rxjs/rx';

declare var swal: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  from: number = 0;

  totalRegister: number;

  loading: boolean = true;

  constructor( public _userService: UserService ) { }

  ngOnInit() {

    this.loadUsers();

  }

  loadUsers () {

    this.loading = true;

    this._userService.chargeUsers( this.from )
        .subscribe( (resp: any ) => {

          this.totalRegister = resp.total;
          this.users = resp.users;
          this.loading = false;

        });
  }

  paginate ( numElems: number ) {

    const from = this.from + numElems;

    if ( from >= this.totalRegister ) {

      return;

    }

    if ( from < 0 ) {

      return;

    }

    this.from += numElems;
    this.loadUsers();

  }


  searchUsers ( term: string ) {

    if ( term.length <= 0 ) {
      this.loadUsers();
      return;
    }

    this._userService.searchUsers( term )
        .subscribe( (users: User[]) => {
          this.users = users;
        });

  }

  deleteUser ( user: User ) {

    if ( user._id === this._userService.user._id ) {
      swal('Can not delete the user', 'You can not delete yourself', 'error');
      return;
    }

    swal({
      title: 'Are you sure?',
      text: 'User to delete: ' + user.name,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((toDelete) => {

      if (toDelete) {
        this._userService.deleteUser( user._id )
            .subscribe( resp => {
              this.loadUsers();
            });
      }

    });

  }

  saveUser ( user: User ) {

    this._userService.updateUser( user )
       .subscribe( resp => console.log(resp) );

  }

}
