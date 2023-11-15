import { Component, inject, OnInit, Input } from '@angular/core'
import { AsyncPipe, CommonModule } from '@angular/common'
import { DashboardService } from '../../services/dashboard.service'
import { Observable, map } from 'rxjs'
import { UserDetailsInterface } from '../../types/user-details.interface'
import { ApiUserDetailsInterface } from '../../types/api-user-details.interface'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  dashboardService: DashboardService = inject(DashboardService)

  userDetails$!: Observable<UserDetailsInterface>

  ngOnInit(): void {
    this.userDetails$ = this.dashboardService
      .getUserDetails()
      .pipe(map((userDetails: ApiUserDetailsInterface) => userDetails.data))
  }
}
