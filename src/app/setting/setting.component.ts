import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.routeConfig?.path);
  }

}
