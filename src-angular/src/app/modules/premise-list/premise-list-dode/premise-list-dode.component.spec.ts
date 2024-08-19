import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiseListDodeComponent } from './premise-list-dode.component';

describe('PremiseListDodeComponent', () => {
  let component: PremiseListDodeComponent;
  let fixture: ComponentFixture<PremiseListDodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiseListDodeComponent]
    });
    fixture = TestBed.createComponent(PremiseListDodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
