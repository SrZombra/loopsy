import { TestBed } from '@angular/core/testing';

import { TypeCellarsService } from './type-cellars.service';

describe('TypeCellarsService', () => {
  let service: TypeCellarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeCellarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
