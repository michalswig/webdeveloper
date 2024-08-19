import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntalHeaderComponent } from './antal-header.component';

describe('AntalHeaderComponent', () => {
  let component: AntalHeaderComponent;
  let fixture: ComponentFixture<AntalHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntalHeaderComponent]
    });
    fixture = TestBed.createComponent(AntalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
