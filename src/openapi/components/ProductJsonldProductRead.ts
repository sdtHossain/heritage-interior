/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as Components from './index'

export interface ProductJsonldProductReadComponent {
  '@context': string //oneOf;
  '@id': string
  '@type': string
  id: number
  name: string
  summary: string
  description: string
  regularPrice: number
  salePrice: number
  inStock: boolean
  onSale: boolean
  firstImage: Components.SonataMediaMediaJsonldProductReadComponent
  secondImage?: Components.SonataMediaMediaJsonldProductReadComponent //anyOf;
  thirdImage?: Components.SonataMediaMediaJsonldProductReadComponent //anyOf;
  brand: Components.BrandJsonldProductReadComponent
  category: Components.CategoryJsonldProductReadComponent
}
