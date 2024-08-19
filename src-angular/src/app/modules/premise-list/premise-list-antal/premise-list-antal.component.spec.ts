import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiseListAntalComponent } from './premise-list-antal.component';

describe('PremiseListAntalComponent', () => {
  let component: PremiseListAntalComponent;
  let fixture: ComponentFixture<PremiseListAntalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiseListAntalComponent]
    });
    fixture = TestBed.createComponent(PremiseListAntalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
