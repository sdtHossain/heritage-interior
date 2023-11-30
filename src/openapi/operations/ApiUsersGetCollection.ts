/* eslint-disable @typescript-eslint/no-unused-vars */
import api from '../utils/api'
import { authStore } from '@/auth/auth'
import { formDatafy } from '../utils/formdata'
import type * as Components from '../components'
import type { PagedCollection } from '../types/collection'

interface ApiUsersGetCollectionParams {
  page?: number
}

export async function ApiUsersGetCollection(params: ApiUsersGetCollectionParams = {}) {
  const options = {
    method: 'GET',
    headers: new Headers({
      Authorization: 'Bearer ' + (authStore.idToken ?? '')
    })
  }
  const response = await api('/api/users', { ...options, params: params })
  const data = await response.json()
  return data as PagedCollection<Components.UserJsonldUserReadComponent>
}
