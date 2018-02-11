import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  @Input() legend: string = 'legend';

  @Input() progress: number = 50;

  constructor() { }

  ngOnInit() {
  }

  changeValue ( val: number ) {

    if ( this.progress >= 100 && val > 0 ) {
      this.progress = 100;
      return;
    }
    if ( this.progress <= 0 && val < 0 ) {
      this.progress = 0;
      return;
    }
    this.progress = this.progress + val;
  }

}
