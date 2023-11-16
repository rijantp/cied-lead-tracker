import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GraphInterface } from '../../../types/graph.interface'
import { GraphUtility } from '../../../utility/graph.utility'
import { GraphBarDirective } from '../../../directives/graph-bar.directive'

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [CommonModule, GraphBarDirective],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss',
})
export class GraphComponent {
  graphData: GraphInterface[] = []
  graphDomains: number[] = []

  @Input() set graphDetails(list: GraphInterface[]) {
    this.graphData = list
    this.graphDomains = GraphUtility.getGraphDomains(list, 'leads')
  }
}
