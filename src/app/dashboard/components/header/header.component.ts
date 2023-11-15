import { Component, inject, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardService } from '../../services/dashboard.service'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  dashboardService: DashboardService = inject(DashboardService)

  ngOnInit(): void {
    this.dashboardService.getUserDetails().subscribe((value) => {
      console.log(value)
    })
  }
}
