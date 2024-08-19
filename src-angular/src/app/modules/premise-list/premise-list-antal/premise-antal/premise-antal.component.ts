import {Component, Input} from '@angular/core';
import {PremiseResponse} from "../../../core/models/premise.model";

@Component({
  selector: 'app-premise-antal',
  templateUrl: './premise-antal.component.html',
  styleUrls: ['./premise-antal.component.scss']
})
export class PremiseAntalComponent {
  @Input() premise!: PremiseResponse;
}
