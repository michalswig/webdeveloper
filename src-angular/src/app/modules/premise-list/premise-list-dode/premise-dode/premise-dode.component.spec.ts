import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiseDodeComponent } from './premise-dode.component';

describe('PremiseDodeComponent', () => {
  let component: PremiseDodeComponent;
  let fixture: ComponentFixture<PremiseDodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiseDodeComponent]
    });
    fixture = TestBed.createComponent(PremiseDodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
