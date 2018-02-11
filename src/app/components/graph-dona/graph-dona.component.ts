import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph-dona',
  templateUrl: './graph-dona.component.html',
  styles: []
})
export class GraphDonaComponent implements OnInit {

  // Doughnut
  @Input('chartLabels') doughnutChartLabels: string[] = [];
  @Input('chartData') doughnutChartData: number[] = [];
  @Input('chartType') doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
