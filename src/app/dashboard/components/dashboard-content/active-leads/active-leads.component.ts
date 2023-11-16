import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LeadInterface } from '../../../types/lead.interface'
import { ProbabilityBadgeDirective } from '../../../directives/probability-badge.directive'

@Component({
  selector: 'app-active-leads',
  standalone: true,
  imports: [CommonModule, ProbabilityBadgeDirective],
  templateUrl: './active-leads.component.html',
  styleUrl: './active-leads.component.scss',
})
export class ActiveLeadsComponent {
  tableHeaders: string[] = [
    'Lead name',
    'Date added',
    'Current status',
    'Probability',
    'Team size',
    'Location',
    'Revenue',
    'Category',
  ]
  @Input() recentlyActiveLeads: LeadInterface[] = []
}
