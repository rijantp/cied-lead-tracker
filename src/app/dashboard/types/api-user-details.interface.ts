import { ApiStatusInterface } from '../../shared/types/api-status.interface'
import { UserDetailsInterface } from './user-details.interface'

export interface ApiUserDetailsInterface extends ApiStatusInterface {
  data: UserDetailsInterface
}
