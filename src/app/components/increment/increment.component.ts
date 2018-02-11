import { Component,
         OnInit,
         Input,
         Output,
         EventEmitter,
         ViewChild,
         ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  @ViewChild('numProgress') numProgress: ElementRef;

  @Input() legend: string = 'legend';
  @Input() progress: number = 50;
  @Output() changeVal: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onChanges ( newValue ) {

    if ( newValue >= 100) {
      this.progress = 100;
    } else if ( newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.numProgress.nativeElement.value = this.progress;

    this.changeVal.emit( this.progress );

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

    this.changeVal.emit(this.progress);

    this.numProgress.nativeElement.focus();

  }

}
