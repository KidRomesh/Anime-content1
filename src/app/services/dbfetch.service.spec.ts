import { TestBed } from '@angular/core/testing';

import { DbfetchService } from './dbfetch.service';

describe('DbfetchService', () => {
  let service: DbfetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbfetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
