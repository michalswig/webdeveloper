import { TestBed } from '@angular/core/testing';

import { InvestmentsService } from './investments.service';

describe('InvestmentsService', () => {
  let service: InvestmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
