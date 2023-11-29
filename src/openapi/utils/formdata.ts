import { each } from 'lodash-es'

export function formDatafy(data: object): FormData {
  const formData = new FormData()
  each(data, (value, key) => {
    formData.append(key, value)
  })
  return formData
}
