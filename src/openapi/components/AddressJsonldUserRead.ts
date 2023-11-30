/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as Components from './index'

export interface AddressJsonldUserReadComponent {
  '@context': string //oneOf;
  '@id': string
  '@type': string
  id: number
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  postCode: number
  country: string
  isDefaultBilling: boolean
  isDefaultShipping: boolean
}
