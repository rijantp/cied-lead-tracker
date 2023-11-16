import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProbabilityInterface } from '../../../types/probability.interface'
import { HorizontalProgressBarComponent } from './horizontal-progress-bar/horizontal-progress-bar.component'
import { ProbabilityListInterface } from '../../../types/probability-list.interface'

@Component({
  selector: 'app-probabilities',
  standalone: true,
  imports: [CommonModule, HorizontalProgressBarComponent],
  templateUrl: './probabilities.component.html',
  styleUrl: './probabilities.component.scss',
})
export class ProbabilitiesComponent {
  probabilitiesList: ProbabilityListInterface[] = []

  @Input() set probabilityDetails(details: ProbabilityInterface) {
    this.probabilitiesList = [
      {
        probability: details.high_percent + '%',
        desc: 'High probability to win',
        leads: details.high_count,
        color: '#C9ECDC',
      },
      {
        probability: details.medium_percent + '%',
        desc: 'Medium probability to win',
        leads: details.medium_count,
        color: '#F9D8F8',
      },
      {
        probability: details.low_percent + '%',
        desc: 'Low probability to win',
        leads: details.low_count,
        color: '#F8CDD9',
      },
    ]
  }
}
