import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentListAntalComponent } from './investment-list-antal.component';

describe('InvestmentListAntalComponent', () => {
  let component: InvestmentListAntalComponent;
  let fixture: ComponentFixture<InvestmentListAntalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentListAntalComponent]
    });
    fixture = TestBed.createComponent(InvestmentListAntalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
