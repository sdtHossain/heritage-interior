/* eslint-disable @typescript-eslint/no-unused-vars */
import api from '../utils/api'
import { authStore } from '@/auth/auth'
import { formDatafy } from '../utils/formdata'
import type * as Components from '../components'
import type { PagedCollection } from '../types/collection'

interface ApiOrdersGetCollectionParams {
  page?: number
  'registeredCustomer.id'?: number
  'registeredCustomer.id[]'?: number[]
  status?: string
  'status[]'?: string[]
  isPaid?: boolean
  'orderDate[before]'?: string
  'orderDate[strictly_before]'?: string
  'orderDate[after]'?: string
  'orderDate[strictly_after]'?: string
}

export async function ApiOrdersGetCollection(params: ApiOrdersGetCollectionParams = {}) {
  const options = {
    method: 'GET',
    headers: new Headers({
      Authorization: 'Bearer ' + (authStore.idToken ?? '')
    })
  }
  const response = await api('/api/orders', { ...options, params: params })
  const data = await response.json()
  return data as PagedCollection<Components.OrderJsonldOrderReadComponent>
}
