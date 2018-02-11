import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {

    const promise = new Promise( (resolve, reject) => {

      let count = 0;

      const interval =  setInterval( () => {

        count += 1;

        if ( count === 3 ) {
          resolve('Ok');
          clearInterval(interval);
        }

      }, 1000);

    });

    promise.then(
      message => console.log('Finish count', message)
    )
    .catch( error => console.error('Error in the promise', error));

  }

  ngOnInit() {
  }

}
