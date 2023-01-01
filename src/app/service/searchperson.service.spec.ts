import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { fakeAsync, flushMicrotasks , tick } from '@angular/core/testing';

import { SearchpersonService } from './searchperson.service';

describe('SearchpersonService', () => {
  let service: SearchpersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SearchpersonService]
    });
    service = TestBed.inject(SearchpersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search person', async function() {

    let id;

    await service.search('www').
    then((data) => {
      id = data.id;
      console.log("ID入力");
    })
    .catch((data) => {
      console.log("caling search method error: " + data.error);
    });

    console.log("rr");
    expect(id).toEqual('www');
    console.log('tt');

  });

});

