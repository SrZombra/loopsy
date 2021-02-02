import { TestBed } from '@angular/core/testing';

import { CellarsService } from './cellars.service';

describe('CellarsService', () => {
  let service: CellarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CellarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
