import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PremiseResponse } from '../../../core/models/premise.model';

@Component({
  selector: 'app-premise-dialog',
  templateUrl: './premise-dialog.component.html',
  styleUrls: ['./premise-dialog.component.scss']
})
export class PremiseDialogComponent {
  premiseForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PremiseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PremiseResponse | null
  ) {
    this.isEditMode = !!data;
    this.premiseForm = this.fb.group({
      type: [data?.type || '', [Validators.required, Validators.pattern('^[abAB]$')]],
      number: [data?.number || '', [Validators.required, Validators.min(1), Validators.max(1000)]],
      floor: [data?.floor || '', [Validators.required, Validators.min(1), Validators.max(1000)]],
      surfacePerSqMeter: [data?.surfacePerSqMeter || '', [Validators.required]],
      pricePerSqMeter: [data?.pricePerSqMeter || '', [Validators.required]],
      totalPrice: [data?.totalPrice || '', [Validators.required]],
      numberOfRooms: [data?.numberOfRooms || '', [Validators.required, Validators.min(1), Validators.max(1000)]],
      technicalStatus: [data?.technicalStatus || '', [Validators.required, Validators.pattern('^[crCR]$')]],
      salesStatus: [data?.salesStatus || '', [Validators.required, Validators.pattern('^[anAN]$')]],
      exposure: [data?.exposure || '', [Validators.required, Validators.pattern('^[wnseWNSE]$')]],
      balcony: [data?.balcony || false],
      garden: [data?.garden || false],
      terrace: [data?.terrace || false],
      loggia: [data?.loggia || false],
      buildingId: [data?.buildingId || '', Validators.required]
    });
  }

  onSave(): void {
    if (this.premiseForm.valid) {
      this.dialogRef.close(this.premiseForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}
