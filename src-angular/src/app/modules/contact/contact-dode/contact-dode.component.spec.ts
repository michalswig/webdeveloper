import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDodeComponent } from './contact-dode.component';

describe('ContactDodeComponent', () => {
  let component: ContactDodeComponent;
  let fixture: ComponentFixture<ContactDodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDodeComponent]
    });
    fixture = TestBed.createComponent(ContactDodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
