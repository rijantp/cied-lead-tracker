import { Component, Input, signal, computed } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LeadInterface } from '../../../types/lead.interface'
import { ProbabilityBadgeDirective } from '../../../directives/probability-badge.directive'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-active-leads',
  standalone: true,
  imports: [CommonModule, ProbabilityBadgeDirective, FormsModule],
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

  searchInput: string = ''

  leadsListSig = signal<LeadInterface[]>([])
  searchSig = signal<string>('')

  filteredListSig = computed(() => {
    return this.searchSig().length > 0
      ? this.leadsListSig().filter((lead: LeadInterface) =>
          lead.name.toLowerCase().includes(this.searchSig().toLowerCase())
        )
      : this.leadsListSig()
  })

  @Input() set recentlyActiveLeads(list: LeadInterface[]) {
    this.leadsListSig.set(list)
  }

  onSearch(text: string): void {
    this.searchSig.set(text)
  }
}
