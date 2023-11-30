/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as Components from './index'

export interface CouponJsonldOrderReadComponent {
  '@context': string //oneOf;
  '@id': string
  '@type': string
  id: number
  title: string
  code: string
  discount: number
  isActive: boolean
}
