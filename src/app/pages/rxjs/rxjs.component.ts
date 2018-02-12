import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/rx';
import { ObserveOnSubscriber } from 'rxjs/operators/observeOn';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  public subscription: Subscription;

  constructor() {

    this.subscription = this.getObservable()
        .subscribe ( val => {
          console.log('Count:', val);
        },
        error => console.log('Error: ' + error),
        () => console.log('Finish')
    );

  }

  ngOnInit() {
  }

  ngOnDestroy() {

    this.subscription.unsubscribe();

  }

  getObservable (): Observable<any> {

    return new Observable( observer => {

      let count = 0;

      const interval = setInterval ( () => {

        count += 1;

        const response = {
          val: count
        };

        observer.next( response );

        // if ( count === 3 ) {
        //  clearInterval ( interval );
        //  observer.complete();
        // }

        // if ( count === 2 ) {
        // clearInterval ( interval );
        // observer.error('Error in the second step');
        // }

      }, 500);
    }
  )
  .retry(2)
  .map( (resp: any) => {
    return resp.val;
  })
  .filter( (val, index) => {
    return (val % 2) === 1 ;
  });

  }

}
