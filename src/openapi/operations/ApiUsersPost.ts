/* eslint-disable @typescript-eslint/no-unused-vars */
import api from '../utils/api'
import { authStore } from '@/auth/auth'
import { formDatafy } from '../utils/formdata'
import type * as Components from '../components'
import type { PagedCollection } from '../types/collection'

interface ApiUsersPostParams {}

interface ApiUsersPostRequestBody {
  email: string
  plainPassword: string
  name?: string
  profilePicture?: string
  phone?: string
  address?: string
  gender?: string
  dateOfBirth?: string
}

export async function ApiUsersPost(
  requestBody: ApiUsersPostRequestBody,
  params: ApiUsersPostParams = {}
) {
  const options = {
    method: 'POST',
    headers: new Headers({
      Authorization: 'Bearer ' + (authStore.idToken ?? ''),
      'Content-Type': 'application/ld+json'
    }),
    body: JSON.stringify(requestBody)
  }
  const response = await api('/api/users', { ...options, params: params })
  const data = await response.json()
  return data as Components.UserJsonldUserReadComponent
}
