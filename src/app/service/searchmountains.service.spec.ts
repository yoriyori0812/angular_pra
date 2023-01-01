import { TestBed } from '@angular/core/testing';

import { SearchmountainsService } from './searchmountains.service';

describe('SearchmountainsService', () => {
  let service: SearchmountainsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchmountainsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.searchmountains());
  });
});
