/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as Components from './index'

export interface OrderJsonldOrderCreateComponent {
  name: string
  phone: string
  address: string
  city: string
  state: string
  postCode: number
  country: string
  note?: string
  orderItems: Components.OrderItemJsonldOrderCreateComponent[]
  deliveryOption: string
  coupon?: string
  billingAddress?: string
  shippingAddress?: string
}
