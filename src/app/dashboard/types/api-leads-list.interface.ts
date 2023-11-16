import { ApiStatusInterface } from '../../shared/types/api-status.interface'
import { LeadsListInterface } from './leads-list.interface'

export interface ApiLeadsListInterface extends ApiStatusInterface {
  data: LeadsListInterface
}
