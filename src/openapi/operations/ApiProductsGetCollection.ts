/* eslint-disable @typescript-eslint/no-unused-vars */
import api from '../utils/api'
import { authStore } from '@/auth/auth'
import { formDatafy } from '../utils/formdata'
import type * as Components from '../components'
import type { PagedCollection } from '../types/collection'

interface ApiProductsGetCollectionParams {
  page?: number
  'brand.id'?: number
  'brand.id[]'?: number[]
  'category.id'?: number
  'category.id[]'?: number[]
  inStock?: boolean
  onSale?: boolean
  'salePrice[between]'?: string
  'salePrice[gt]'?: string
  'salePrice[gte]'?: string
  'salePrice[lt]'?: string
  'salePrice[lte]'?: string
}

export async function ApiProductsGetCollection(params: ApiProductsGetCollectionParams = {}) {
  const options = {
    method: 'GET',
    headers: new Headers({
      Authorization: 'Bearer ' + (authStore.idToken ?? '')
    })
  }
  const response = await api('/api/products', { ...options, params: params })
  const data = await response.json()
  return data as PagedCollection<Components.ProductJsonldProductReadComponent>
}
