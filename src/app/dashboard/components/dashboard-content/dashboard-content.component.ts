import { Component, signal, inject, OnInit } from '@angular/core'
import { AsyncPipe, CommonModule } from '@angular/common'
import { TabsEnum } from '../../constants/tabs.enum'
import { ProbabilitiesComponent } from './probabilities/probabilities.component'
import { GraphComponent } from './graph/graph.component'
import { ActiveLeadStatusComponent } from './active-lead-status/active-lead-status.component'
import { ActiveLeadsComponent } from './active-leads/active-leads.component'
import { DashboardService } from '../../services/dashboard.service'
import { GraphDetailsInterface } from '../../types/graph-details.interface'
import { Observable, switchMap, map } from 'rxjs'
import { ApiGraphDetailsInterface } from '../../types/api-graph-details.interface'
import { toObservable } from '@angular/core/rxjs-interop'
import { StageTypeCountPipe } from '../../pipes/stage-type-count.pipe'
import { ApiProbabilityInterface } from '../../types/api-probability.interface'
import { ProbabilityInterface } from '../../types/probability.interface'

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [
    CommonModule,
    ProbabilitiesComponent,
    GraphComponent,
    ActiveLeadStatusComponent,
    ActiveLeadsComponent,
    AsyncPipe,
    StageTypeCountPipe,
  ],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.scss',
})
export class DashboardContentComponent implements OnInit {
  dashboardService: DashboardService = inject(DashboardService)

  tabs: typeof TabsEnum = TabsEnum

  tabSelectedSig = signal(TabsEnum.ACTIVE)
  tabSelected$: Observable<string> = toObservable(this.tabSelectedSig)

  graphDetails$: Observable<GraphDetailsInterface> = this.tabSelected$.pipe(
    switchMap((selectedTab: string) => {
      return this.dashboardService.getGraphDetails(selectedTab.toLowerCase())
    }),
    map((graphDetails: ApiGraphDetailsInterface) => graphDetails.data)
  )

  probabilityDetails$: Observable<ProbabilityInterface> =
    this.tabSelected$.pipe(
      switchMap((selectedTab: string) => {
        return this.dashboardService.getProbabilityDetails(
          selectedTab.toLowerCase()
        )
      }),
      map(
        (probabilityDetails: ApiProbabilityInterface) => probabilityDetails.data
      )
    )

  tabsList: TabsEnum[] = [TabsEnum.ACTIVE, TabsEnum.WON, TabsEnum.LOST]

  ngOnInit(): void {
    this.tabSelectedSig.set(TabsEnum.ACTIVE)
  }

  onSelectingTab(tab: TabsEnum): void {
    this.tabSelectedSig.set(tab)
  }
}
