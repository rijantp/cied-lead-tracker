import { ApiStatusInterface } from '../../shared/types/api-status.interface'
import { ProbabilityInterface } from './probability.interface'

export interface ApiProbabilityInterface extends ApiStatusInterface {
  data: ProbabilityInterface
}
