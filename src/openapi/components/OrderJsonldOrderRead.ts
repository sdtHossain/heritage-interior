/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as Components from './index'

export interface OrderJsonldOrderReadComponent {
  '@context': string //oneOf;
  '@id': string
  '@type': string
  id: number
  name: string
  phone: string
  address: string
  city: string
  state: string
  postCode: number
  country: string
  note?: string
  subTotal: number
  deliveryCost: number
  discount: number
  totalCost: number
  isPaid: boolean
  orderDate: string
  placedAt: string
  status: string
  orderItems: Components.OrderItemJsonldOrderReadComponent[]
  deliveryOption: Components.DeliveryOptionJsonldOrderReadComponent
  coupon?: Components.CouponJsonldOrderReadComponent //anyOf;
  billingAddress?: string
  shippingAddress?: string
  placedByCustomer: boolean
}
