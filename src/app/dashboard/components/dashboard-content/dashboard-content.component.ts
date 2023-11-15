import { Component, signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TabsEnum } from '../../constants/tabs.enum'
import { ProbabilitiesComponent } from './probabilities/probabilities.component'
import { GraphComponent } from './graph/graph.component'

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [CommonModule, ProbabilitiesComponent, GraphComponent],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.scss',
})
export class DashboardContentComponent {
  tabs: typeof TabsEnum = TabsEnum
  tabSelectedSig = signal(TabsEnum.ACTIVE)
  tabsList: TabsEnum[] = [TabsEnum.ACTIVE, TabsEnum.WON, TabsEnum.LOST]

  onSelectingTab(tab: TabsEnum): void {
    this.tabSelectedSig.set(tab)
  }
}
