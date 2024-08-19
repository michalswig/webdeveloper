import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodeHeaderComponent } from './dode-header.component';

describe('DodeHeaderComponent', () => {
  let component: DodeHeaderComponent;
  let fixture: ComponentFixture<DodeHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DodeHeaderComponent]
    });
    fixture = TestBed.createComponent(DodeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
