import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiseListFilterAntalComponent } from './premise-list-filter-antal.component';

describe('PremiseListFilterAntalComponent', () => {
  let component: PremiseListFilterAntalComponent;
  let fixture: ComponentFixture<PremiseListFilterAntalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiseListFilterAntalComponent]
    });
    fixture = TestBed.createComponent(PremiseListFilterAntalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
