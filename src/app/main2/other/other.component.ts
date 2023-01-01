import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  data : any[] = [
    {
      "name": "1月",
      "value": 4
    },
    {
      "name": "2月",
      "value": 5
    },
    {
      "name": "3月",
      "value": 7
    },
    {
      "name": "4月",
      "value": 8
    },
    {
      "name": "5月",
      "value": 5
    },
    {
      "name": "6月",
      "value": 7
    },
    {
      "name": "7月",
      "value": 13
    },
    {
      "name": "8月",
      "value": 15
    },
    {
      "name": "9月",
      "value": 10
    },
    {
      "name": "10月",
      "value": 9
    },
    {
      "name": "11月",
      "value": 0
    },
    {
      "name": "12月",
      "value": 1
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

}
