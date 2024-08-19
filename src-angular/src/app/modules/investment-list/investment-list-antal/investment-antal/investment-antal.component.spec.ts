import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentAntalComponent } from './investment-antal.component';

describe('InvestmentAntalComponent', () => {
  let component: InvestmentAntalComponent;
  let fixture: ComponentFixture<InvestmentAntalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentAntalComponent]
    });
    fixture = TestBed.createComponent(InvestmentAntalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
