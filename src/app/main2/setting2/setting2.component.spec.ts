import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Setting2Component } from './setting2.component';

describe('Setting2Component', () => {
  let component: Setting2Component;
  let fixture: ComponentFixture<Setting2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Setting2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Setting2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
