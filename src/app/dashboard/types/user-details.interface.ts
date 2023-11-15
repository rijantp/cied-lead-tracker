import { PhoneInterface } from './phone.interface'

export interface UserDetailsInterface {
  id: string
  first_name: string
  last_name: string
  email: string
  dob: null
  phone: PhoneInterface
  address: string
  terms_accepted: boolean
  privacy_accepted: boolean
  email_verified: boolean
  status: number
  image: string
  updated_email: null
  blocked: boolean
  dates_joined: string
  type: number
}
