import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { CommonModule, DecimalPipe } from '@angular/common'
import { ProbabilityListInterface } from '../../../../types/probability-list.interface'

@Component({
  selector: 'app-horizontal-progress-bar',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './horizontal-progress-bar.component.html',
  styleUrl: './horizontal-progress-bar.component.scss',
})
export class HorizontalProgressBarComponent implements OnChanges {
  @Input({ required: true }) probabilityDetails!: ProbabilityListInterface

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      console.log(changes['probabilityDetails'])
    }
  }
}
