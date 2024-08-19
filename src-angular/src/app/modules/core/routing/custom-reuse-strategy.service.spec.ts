import { TestBed } from '@angular/core/testing';

import { CustomReuseStrategyService } from './custom-reuse-strategy.service';

describe('CustomReuseStrategyService', () => {
  let service: CustomReuseStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomReuseStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
