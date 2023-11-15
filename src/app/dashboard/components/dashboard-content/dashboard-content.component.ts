import { Component, signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TabsEnum } from '../../constants/tabs.enum'
import { ProbabilitiesComponent } from './probabilities/probabilities.component'
import { GraphComponent } from './graph/graph.component'
import { ActiveLeadStatusComponent } from './active-lead-status/active-lead-status.component'
import { ActiveLeadsComponent } from './active-leads/active-leads.component'

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [
    CommonModule,
    ProbabilitiesComponent,
    GraphComponent,
    ActiveLeadStatusComponent,
    ActiveLeadsComponent,
  ],
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
