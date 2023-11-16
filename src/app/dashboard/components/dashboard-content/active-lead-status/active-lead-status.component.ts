import { Component, OnInit, inject } from '@angular/core'
import { CommonModule, DecimalPipe } from '@angular/common'
import { DashboardService } from '../../../services/dashboard.service'
import { ActiveLeadsStatusInterface } from '../../../types/active-leads-status.interface'
import { Observable, map } from 'rxjs'
import { ApiActiveLeadsInterface } from '../../../types/api-active-leads.interface'

@Component({
  selector: 'app-active-lead-status',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './active-lead-status.component.html',
  styleUrl: './active-lead-status.component.scss',
})
export class ActiveLeadStatusComponent implements OnInit {
  dashBoardService: DashboardService = inject(DashboardService)
  activeLeadStatus$!: Observable<ActiveLeadsStatusInterface[]>

  ngOnInit(): void {
    this.activeLeadStatus$ = this.dashBoardService
      .getActiveLeadsStatus()
      .pipe(map((details: ApiActiveLeadsInterface) => details.data.results))
  }
}
