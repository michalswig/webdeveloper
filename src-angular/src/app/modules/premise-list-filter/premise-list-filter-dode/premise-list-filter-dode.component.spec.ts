import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiseListFilterDodeComponent } from './premise-list-filter-dode.component';

describe('PremiseListFilterDodeComponent', () => {
  let component: PremiseListFilterDodeComponent;
  let fixture: ComponentFixture<PremiseListFilterDodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiseListFilterDodeComponent]
    });
    fixture = TestBed.createComponent(PremiseListFilterDodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
