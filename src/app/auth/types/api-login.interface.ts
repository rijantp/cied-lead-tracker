import { ApiStatusInterface } from '../../shared/types/api-status.interface'
import { AuthDetailsInterface } from './auth-details.interface'

export interface ApiLoginInterface extends ApiStatusInterface {
  data: AuthDetailsInterface
}
