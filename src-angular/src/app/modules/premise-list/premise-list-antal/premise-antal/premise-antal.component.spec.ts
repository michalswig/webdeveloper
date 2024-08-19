import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiseAntalComponent } from './premise-antal.component';

describe('PremiseAntalComponent', () => {
  let component: PremiseAntalComponent;
  let fixture: ComponentFixture<PremiseAntalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiseAntalComponent]
    });
    fixture = TestBed.createComponent(PremiseAntalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
