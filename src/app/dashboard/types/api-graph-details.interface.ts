import { ApiStatusInterface } from '../../shared/types/api-status.interface'
import { GraphDetailsInterface } from './graph-details.interface'

export interface ApiGraphDetailsInterface extends ApiStatusInterface {
  data: GraphDetailsInterface
}
