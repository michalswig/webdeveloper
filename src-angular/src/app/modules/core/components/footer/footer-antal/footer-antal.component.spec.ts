import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAntalComponent } from './footer-antal.component';

describe('FooterAntalComponent', () => {
  let component: FooterAntalComponent;
  let fixture: ComponentFixture<FooterAntalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterAntalComponent]
    });
    fixture = TestBed.createComponent(FooterAntalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
