import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LINKS_INFO, Links } from '../app-common';
import { RouterTestingModule } from '@angular/router/testing';

import { WorkComponent } from './work.component';

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkComponent ],
      imports: [ RouterTestingModule ],
      providers: [ {provide: LINKS_INFO, useValue: Links} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
