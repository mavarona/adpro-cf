import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { User } from '../../models/user.model';

// Services
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor( public _userService: UserService,
               public _router: Router ) { }

  ngOnInit() {

    this.user = this._userService.user;

  }

  search ( term: string ) {

    this._router.navigate(['/search', term]);

  }

}
