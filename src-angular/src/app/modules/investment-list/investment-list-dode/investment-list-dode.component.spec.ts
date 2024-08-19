import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentListDodeComponent } from './investment-list-dode.component';

describe('InvestmentListDodeComponent', () => {
  let component: InvestmentListDodeComponent;
  let fixture: ComponentFixture<InvestmentListDodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentListDodeComponent]
    });
    fixture = TestBed.createComponent(InvestmentListDodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
