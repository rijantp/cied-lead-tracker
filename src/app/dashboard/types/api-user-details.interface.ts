import { ApiStatusInterface } from '../../shared/api-status.interface'
import { UserDetailsInterface } from './user-details.interface'

export interface ApiUserDetailsInterface extends ApiStatusInterface {
  data: UserDetailsInterface
}
