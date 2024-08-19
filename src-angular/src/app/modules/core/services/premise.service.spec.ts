import { TestBed } from '@angular/core/testing';

import { PremiseService } from './premise.service';

describe('PremiseService', () => {
  let service: PremiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
