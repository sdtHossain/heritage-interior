/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as Components from './index'

export interface SonataMediaMediaBrandReadComponent {
  id: number
  small: string
  big: string
  fileName: string
  size: number
  contentType: string
  height: number
  width: number
  reference: string

  [key: `${string}_${string}`]: string
}
