import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentListComponent } from './investment-list.component';

describe('InvestmentListComponent', () => {
  let component: InvestmentListComponent;
  let fixture: ComponentFixture<InvestmentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentListComponent]
    });
    fixture = TestBed.createComponent(InvestmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
