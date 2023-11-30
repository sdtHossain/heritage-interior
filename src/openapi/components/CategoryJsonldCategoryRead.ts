/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as Components from './index'

export interface CategoryJsonldCategoryReadComponent {
  '@id': string
  '@type': string
  id: number
  name: string
  image?: Components.SonataMediaMediaJsonldCategoryReadComponent //anyOf;
}
