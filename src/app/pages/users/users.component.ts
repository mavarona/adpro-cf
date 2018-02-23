import { Component, OnInit } from '@angular/core';

// Models
import { User } from '../../models/user.model';
import { UserService } from '../../services/service.index';
import { URL_SERVICES } from '../../config/config';

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

}
