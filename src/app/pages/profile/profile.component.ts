import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/service.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  user: User;

  imageUpload: File;

  constructor( public _userService: UserService ) {

    this.user = this._userService.user;

   }

  ngOnInit() {
  }

  save ( user: User ) {

    this.user.name = user.name;

    if ( !this.user.google ) {
      this.user.email = user.email;
    }

    this._userService.updateUser( this.user )
        .subscribe ( resp => console.log( resp ) );

  }

  selectImage ( file: File ) {

    if ( !file ) {
      this.imageUpload = null;
      return;
    }

    this.imageUpload = file;

  }

  changeImage () {

    this._userService.changeImage( this.imageUpload, this.user._id );

  }

}
