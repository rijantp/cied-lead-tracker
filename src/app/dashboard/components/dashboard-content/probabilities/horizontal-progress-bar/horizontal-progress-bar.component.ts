import { Component, Input } from '@angular/core'
import { CommonModule, DecimalPipe } from '@angular/common'
import { ProbabilityListInterface } from '../../../../types/probability-list.interface'

@Component({
  selector: 'app-horizontal-progress-bar',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './horizontal-progress-bar.component.html',
  styleUrl: './horizontal-progress-bar.component.scss',
})
export class HorizontalProgressBarComponent {
  @Input({ required: true }) probabilityDetails!: ProbabilityListInterface
}
