import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAntalComponent } from './home-antal.component';

describe('HomeAntalComponent', () => {
  let component: HomeAntalComponent;
  let fixture: ComponentFixture<HomeAntalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAntalComponent]
    });
    fixture = TestBed.createComponent(HomeAntalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
