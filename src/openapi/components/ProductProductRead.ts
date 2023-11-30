/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as Components from './index'

export interface ProductProductReadComponent {
  id: number
  name: string
  summary: string
  description: string
  regularPrice: number
  salePrice: number
  inStock: boolean
  onSale: boolean
  firstImage: Components.SonataMediaMediaProductReadComponent
  secondImage?: Components.SonataMediaMediaProductReadComponent //anyOf;
  thirdImage?: Components.SonataMediaMediaProductReadComponent //anyOf;
  brand: Components.BrandProductReadComponent
  category: Components.CategoryProductReadComponent
}
