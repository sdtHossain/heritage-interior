/* eslint-disable @typescript-eslint/no-unused-vars */
import api from '../utils/api'
import { authStore } from '@/auth/auth'
import { formDatafy } from '../utils/formdata'
import type * as Components from '../components'
import type { PagedCollection } from '../types/collection'

interface ApiSonataMediaMediaPostParams {}

interface ApiSonataMediaMediaPostRequestBody {
  file: string | Blob
}

export async function ApiSonataMediaMediaPost(
  requestBody: ApiSonataMediaMediaPostRequestBody,
  params: ApiSonataMediaMediaPostParams = {}
) {
  const options = {
    method: 'POST',
    headers: new Headers({
      Authorization: 'Bearer ' + (authStore.idToken ?? '')
      // Let browser fill it, for setting "boundary" //"Content-Type": "multipart/form-data",
    }),
    body: formDatafy(requestBody)
  }
  const response = await api('/api/sonata_media_media', { ...options, params: params })
  const data = await response.json()
  return data as Components.SonataMediaMediaJsonldMediaObjectReadComponent
}
