import { TestBed } from '@angular/core/testing';

import { ZServiceService } from './z-service.service';

describe('ZServiceService', () => {
  let service: ZServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
