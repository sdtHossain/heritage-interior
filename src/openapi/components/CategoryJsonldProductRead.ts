/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as Components from './index'

export interface CategoryJsonldProductReadComponent {
  '@context': string //oneOf;
  '@id': string
  '@type': string
  id: number
  name: string
  image?: Components.SonataMediaMediaJsonldProductReadComponent //anyOf;
}
