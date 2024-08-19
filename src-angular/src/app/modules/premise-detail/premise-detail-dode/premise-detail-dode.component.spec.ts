import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiseDetailDodeComponent } from './premise-detail-dode.component';

describe('PremiseDetailDodeComponent', () => {
  let component: PremiseDetailDodeComponent;
  let fixture: ComponentFixture<PremiseDetailDodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiseDetailDodeComponent]
    });
    fixture = TestBed.createComponent(PremiseDetailDodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
