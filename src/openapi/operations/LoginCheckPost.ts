/* eslint-disable @typescript-eslint/no-unused-vars */
import api from '../utils/api'
import { authStore } from '@/auth/auth'
import { formDatafy } from '../utils/formdata'
import type * as Components from '../components'
import type { PagedCollection } from '../types/collection'

interface LoginCheckPostParams {}

interface LoginCheckPostRequestBody {
  email: string
  password: string
}

export interface LoginCheckPostResponseBody {
  token: string
}

export async function LoginCheckPost(
  requestBody: LoginCheckPostRequestBody,
  params: LoginCheckPostParams = {}
) {
  const options = {
    method: 'POST',
    headers: new Headers({
      Authorization: 'Bearer ' + (authStore.idToken ?? ''),
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(requestBody)
  }
  const response = await api('/api/authentication_token', { ...options, params: params })
  const data = await response.json()
  return data as LoginCheckPostResponseBody
}
