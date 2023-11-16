import { ApiStatusInterface } from '../../shared/types/api-status.interface'
import { ActiveLeadsInterface } from './active-leads.interface'

export interface ApiActiveLeadsInterface extends ApiStatusInterface {
  data: ActiveLeadsInterface
}
