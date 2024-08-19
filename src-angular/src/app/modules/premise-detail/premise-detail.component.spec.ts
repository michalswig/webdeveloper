import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiseDetailComponent } from './premise-detail.component';

describe('PremiseDetailComponent', () => {
  let component: PremiseDetailComponent;
  let fixture: ComponentFixture<PremiseDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiseDetailComponent]
    });
    fixture = TestBed.createComponent(PremiseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
