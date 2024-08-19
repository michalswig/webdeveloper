import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDodeComponent } from './footer-dode.component';

describe('FooterDodeComponent', () => {
  let component: FooterDodeComponent;
  let fixture: ComponentFixture<FooterDodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterDodeComponent]
    });
    fixture = TestBed.createComponent(FooterDodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
