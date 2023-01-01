import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  //Observable boolean source
  private sidemenuOpenSource = new Subject<any>();
  private pageNumberSource = new Subject<number>();

  //Observalbe boolean stream
  sidemenuOpen$ = this.sidemenuOpenSource.asObservable();
  pageNumber$ = this.pageNumberSource.asObservable();

  constructor() { }

  //trasmit whether you open sidemunu or not
  toggleSideMenu() {
    this.sidemenuOpenSource.next([]);
  }
  changeSideMenu(pageNumber: number) {
    this.pageNumberSource.next(pageNumber);
  }
}
