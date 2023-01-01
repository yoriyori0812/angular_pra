import { Injectable } from '@angular/core';
import { Mountain } from '../class/mountain';
import fakemountains from './fakemountains.json';

@Injectable({
  providedIn: 'root'
})
export class SearchmountainsService {

  constructor() { }

  searchmountains(): Mountain[] {
    return fakemountains;
  }
}
