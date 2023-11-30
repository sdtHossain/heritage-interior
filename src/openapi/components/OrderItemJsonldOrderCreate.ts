/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as Components from './index'

export interface OrderItemJsonldOrderCreateComponent {
  '@context': string //oneOf;
  '@id': string
  '@type': string
  product: string
  quantity: number
  price: number
}
