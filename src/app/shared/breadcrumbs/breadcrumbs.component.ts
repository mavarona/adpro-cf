import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = '';

  constructor(
    private _router: Router,
    public _title: Title,
    public _meta: Meta
  ) {

      this.getDataRoute()
          .subscribe( data => {
            this.label = data.title;
            this._title.setTitle(this.label);

            const metaTag: MetaDefinition = {
              name: 'description',
              content: this.label
            };

            this._meta.updateTag(metaTag);

          });
  }

  ngOnInit() {
  }

  getDataRoute () {

    return this._router.events
          .filter( event => event instanceof ActivationEnd )
          .filter( (event: ActivationEnd) => event.snapshot.firstChild === null )
          .map( (event: ActivationEnd) => event.snapshot.data );

  }

}
