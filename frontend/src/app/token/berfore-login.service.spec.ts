import { TestBed } from '@angular/core/testing';

import { BerforeLoginService } from './berfore-login.service';

describe('BerforeLoginService', () => {
  let service: BerforeLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BerforeLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
