import { ActiveLeadsStatusInterface } from './active-leads-status.interface'

export interface ActiveLeadsInterface {
  count: number
  next: null
  previous: null
  results: ActiveLeadsStatusInterface[]
}
