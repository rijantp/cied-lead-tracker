import { Component, inject, OnInit, Input } from '@angular/core'
import { AsyncPipe, CommonModule } from '@angular/common'
import { DashboardService } from '../../services/dashboard.service'
import { Observable, map } from 'rxjs'
import { UserDetailsInterface } from '../../types/user-details.interface'
import { ApiUserDetailsInterface } from '../../types/api-user-details.interface'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  dashboardService: DashboardService = inject(DashboardService)
  router: Router = inject(Router)

  userDetails$!: Observable<UserDetailsInterface>

  ngOnInit(): void {
    this.userDetails$ = this.dashboardService
      .getUserDetails()
      .pipe(map((userDetails: ApiUserDetailsInterface) => userDetails.data))
  }

  logout(): void {
    this.router.navigate(['login'])
  }
}
