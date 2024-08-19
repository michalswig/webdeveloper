import { TestBed } from '@angular/core/testing';

import { DynamicComponentLoadingService } from './dynamic-component-loading.service';

describe('DynamicComponentLoadingServiceService', () => {
  let service: DynamicComponentLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicComponentLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
