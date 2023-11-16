import { LeadInterface } from './lead.interface'

export interface LeadsListInterface {
  count: number
  total_deal_Value: number
  next: null
  previous: null
  results: LeadInterface[]
}
