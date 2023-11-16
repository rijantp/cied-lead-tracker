import { ApiStatusInterface } from '../../shared/api-status.interface'
import { GraphDetailsInterface } from './graph-details.interface'

export interface ApiGraphDetailsInterface extends ApiStatusInterface {
  data: GraphDetailsInterface
}
