import { ApiStatusInterface } from '../../shared/api-status.interface'
import { AuthDetailsInterface } from './auth-details.interface'

export interface ApiLoginInterface extends ApiStatusInterface {
  data: AuthDetailsInterface
}
