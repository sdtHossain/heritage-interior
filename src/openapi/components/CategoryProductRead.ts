/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as Components from './index'

export interface CategoryProductReadComponent {
  id: number
  name: string
  image?: Components.SonataMediaMediaProductReadComponent //anyOf;
}
