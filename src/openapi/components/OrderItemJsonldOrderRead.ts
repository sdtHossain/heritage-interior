/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as Components from './index'

export interface OrderItemJsonldOrderReadComponent {
  '@context': string //oneOf;
  '@id': string
  '@type': string
  id: number
  product: string
  quantity: number
  price: number
}
