import { Component, OnInit } from '@angular/core';
import fakemountains from './fakemountains.json';
import { SearchmountainsService } from '../service/searchmountains.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private searchmountains: SearchmountainsService) {
    console.log(this.searchmountains.searchmountains());
  }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['number', 'name', 'height', 'note'];
    mountains = this.searchmountains.searchmountains();

}
