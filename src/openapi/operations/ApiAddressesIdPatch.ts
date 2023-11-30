/* eslint-disable @typescript-eslint/no-unused-vars */
import api from '../utils/api'
import { authStore } from '@/auth/auth'
import { formDatafy } from '../utils/formdata'
import type * as Components from '../components'
import type { PagedCollection } from '../types/collection'

interface ApiAddressesIdPatchParams {}

interface ApiAddressesIdPatchRequestBody {
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  postCode: number
  country: string
  isDefaultBilling: boolean
  isDefaultShipping: boolean
}

export async function ApiAddressesIdPatch(
  id: string,
  requestBody: ApiAddressesIdPatchRequestBody,
  params: ApiAddressesIdPatchParams = {}
) {
  const options = {
    method: 'PATCH',
    headers: new Headers({
      Authorization: 'Bearer ' + (authStore.idToken ?? ''),
      'Content-Type': 'application/merge-patch+json'
    }),
    body: JSON.stringify(requestBody)
  }
  const response = await api('/api/addresses/{id}'.replace('{id}', id), {
    ...options,
    params: params
  })
  const data = await response.json()
  return data as Components.AddressJsonldAddressReadComponent
}
