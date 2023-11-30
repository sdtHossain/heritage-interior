/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as Components from './index'

export interface UserUserReadComponent {
  id: number
  email: string
  isVerified: boolean
  passwordUpdatedAt?: string
  name?: string
  profilePicture?: Components.SonataMediaMediaUserReadComponent //anyOf;
  registeredAt: string
  phone?: string
  address?: string
  gender?: string
  dateOfBirth?: string
  addresses: Components.AddressUserReadComponent[]
}
