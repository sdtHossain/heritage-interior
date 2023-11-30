/* eslint-disable @typescript-eslint/no-unused-vars */
import api from '../utils/api'
import { authStore } from '@/auth/auth'
import { formDatafy } from '../utils/formdata'
import type * as Components from '../components'
import type { PagedCollection } from '../types/collection'

interface ApiOrdersPostParams {}

interface ApiOrdersPostRequestBody {
  name: string
  phone: string
  address: string
  city: string
  state: string
  postCode: number
  country: string
  note?: string
  orderItems: object[]
  deliveryOption: string
  coupon?: string
  billingAddress?: string
  shippingAddress?: string
}

export async function ApiOrdersPost(
  requestBody: ApiOrdersPostRequestBody,
  params: ApiOrdersPostParams = {}
) {
  const options = {
    method: 'POST',
    headers: new Headers({
      Authorization: 'Bearer ' + (authStore.idToken ?? ''),
      'Content-Type': 'application/ld+json'
    }),
    body: JSON.stringify(requestBody)
  }
  const response = await api('/api/orders', { ...options, params: params })
  const data = await response.json()
  return data as Components.OrderJsonldOrderReadComponent
}
