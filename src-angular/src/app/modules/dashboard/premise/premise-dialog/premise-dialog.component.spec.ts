import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiseDialogComponent } from './premise-dialog.component';

describe('PremiseDialogComponent', () => {
  let component: PremiseDialogComponent;
  let fixture: ComponentFixture<PremiseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiseDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
