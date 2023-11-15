import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-active-leads',
  standalone: true,
  imports: [CommonModule],
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
}
