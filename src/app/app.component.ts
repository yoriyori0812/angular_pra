import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectorService } from './connector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'angular-practice2';
  sidemenu_open: boolean;

  constructor(private router: Router,
    private connectorService: ConnectorService) {

    this.sidemenu_open = false;
    this.router.navigate(['./work/main']);
    connectorService.sidemenuOpen$.subscribe(
      sidemenuOpen => {
        this.sidemenu_open = sidemenuOpen;
      }
    )
  }

  changeSideMenu(pNumber: number) {
    this.connectorService.changeSideMenu(pNumber);
    if(!this.sidemenu_open) {
    this.toggleSlide();
    }
  }

  toggleSlide() {
    this.sidemenu_open = !this.sidemenu_open;
    this.connectorService.toggleSideMenu();
  }

}
