import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentDodeComponent } from './investment-dode.component';

describe('InvestmentDodeComponent', () => {
  let component: InvestmentDodeComponent;
  let fixture: ComponentFixture<InvestmentDodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentDodeComponent]
    });
    fixture = TestBed.createComponent(InvestmentDodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
