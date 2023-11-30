/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as Components from './index'

export interface UserJsonldUserReadComponent {
  '@context': string //oneOf;
  '@id': string
  '@type': string
  id: number
  email: string
  isVerified: boolean
  passwordUpdatedAt?: string
  name?: string
  profilePicture?: Components.SonataMediaMediaJsonldUserReadComponent //anyOf;
  registeredAt: string
  phone?: string
  address?: string
  gender?: string
  dateOfBirth?: string
  addresses: Components.AddressJsonldUserReadComponent[]
}
