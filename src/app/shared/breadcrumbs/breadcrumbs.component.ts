import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  constructor(
    private _router: Router
  ) {

    this._router.events
        .filter( event => event instanceof ActivationEnd )
        .filter( (event: ActivationEnd) => event.snapshot.firstChild === null )
        .map( (event: ActivationEnd) => event.snapshot.data )
        .subscribe( event => console.log(event) );
  }

  ngOnInit() {
  }

}
