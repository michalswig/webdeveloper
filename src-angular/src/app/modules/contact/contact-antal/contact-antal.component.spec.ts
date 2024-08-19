import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAntalComponent } from './contact-antal.component';

describe('ContactAntalComponent', () => {
  let component: ContactAntalComponent;
  let fixture: ComponentFixture<ContactAntalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactAntalComponent]
    });
    fixture = TestBed.createComponent(ContactAntalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
