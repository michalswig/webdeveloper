import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiseDetailAntalComponent } from './premise-detail-antal.component';

describe('PremiseDetailAntalComponent', () => {
  let component: PremiseDetailAntalComponent;
  let fixture: ComponentFixture<PremiseDetailAntalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiseDetailAntalComponent]
    });
    fixture = TestBed.createComponent(PremiseDetailAntalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
