import { Component, OnInit, Inject,} from '@angular/core';
import { Router } from '@angular/router';
import { LINKS_INFO } from '../app-common';
import { ConnectorService } from '../connector.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  open: boolean;
  allpages: [][];
  pages: [];
  count: number= 0;

  constructor(@Inject(LINKS_INFO) private pallpages: [][],
  private router: Router,
  private connectorService: ConnectorService){

    this.allpages = pallpages;
    this.pages = this.allpages[0];
    this.open = false;

    connectorService.sidemenuOpen$.subscribe(
      sidemenuOpen => {
        this.open = !this.open;
      }
    );
    connectorService.pageNumber$.subscribe(
      pageNumber => {
        this.pages = this.pallpages[pageNumber];
      }
    )
     }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const nowUrl = this.router.url.split('/')[1];
    if(nowUrl == "work2") {
      this.pages = this.allpages[1];
    }
  }

  changeSlide(): void {
    this.open = !this.open;
  }

}
