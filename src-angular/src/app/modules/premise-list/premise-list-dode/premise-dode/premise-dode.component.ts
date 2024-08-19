import {Component, Input} from '@angular/core';
import {PremiseResponse} from "../../../core/models/premise.model";

@Component({
  selector: 'app-premise-dode',
  templateUrl: './premise-dode.component.html',
  styleUrls: ['./premise-dode.component.scss']
})
export class PremiseDodeComponent {
  @Input() premise!: PremiseResponse;

}
