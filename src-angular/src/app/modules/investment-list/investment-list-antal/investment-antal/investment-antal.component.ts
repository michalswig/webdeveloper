import {Component, Input} from '@angular/core';
import {InvestmentResponse} from "../../../core/models/investment.model";

@Component({
  selector: 'app-investment-antal',
  templateUrl: './investment-antal.component.html',
  styleUrls: ['./investment-antal.component.scss']
})
export class InvestmentAntalComponent {
  @Input() investment!: InvestmentResponse;
}
