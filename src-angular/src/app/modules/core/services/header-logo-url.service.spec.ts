import { TestBed } from '@angular/core/testing';

import { HeaderLogoUrlService } from './header-logo-url.service';

describe('HeaderLogoUrlService', () => {
  let service: HeaderLogoUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderLogoUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
