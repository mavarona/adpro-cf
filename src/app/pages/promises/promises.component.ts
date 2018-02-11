import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.countTo(3)
    .then(
      message => console.log('Finish count', message)
    )
    .catch( error => console.error('Error in the promise', error));

  }

  countTo ( val: number ): Promise<boolean> {

    return new Promise( (resolve, reject) => {

      let count = 0;

      const interval =  setInterval( () => {

        count += 1;

        if ( count === val ) {
          resolve(true);
          clearInterval(interval);
        }

      }, 1000);

    });

  }

}
