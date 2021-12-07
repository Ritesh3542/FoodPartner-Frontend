import { TestBed } from '@angular/core/testing';

import { AfterLoggedinService } from './after-loggedin.service';

describe('AfterLoggedinService', () => {
  let service: AfterLoggedinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfterLoggedinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
