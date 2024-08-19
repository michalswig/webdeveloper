import {ChangeDetectorRef, Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Subscription} from "rxjs";

@Pipe({
  standalone: true,
  name: 'roomPlural',
  pure: false // Mark the pipe as impure
})
export class RoomPluralPipe implements PipeTransform {

  private langChangeSubscription: Subscription;

  constructor(private translate: TranslateService, private cdr: ChangeDetectorRef) {
    // Subscribe to language change events
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      // Trigger change detection when the language changes
      this.cdr.markForCheck();
    });
  }

  transform(value: number): string {
    if (value === 1) {
      return this.translate.instant('shared.room.one');
    } else {
      return this.translate.instant('shared.room.other');
    }
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

}
