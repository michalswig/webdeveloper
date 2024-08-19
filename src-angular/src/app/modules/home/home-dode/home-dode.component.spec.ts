import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDodeComponent } from './home-dode.component';

describe('HomeDodeComponent', () => {
  let component: HomeDodeComponent;
  let fixture: ComponentFixture<HomeDodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDodeComponent]
    });
    fixture = TestBed.createComponent(HomeDodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
