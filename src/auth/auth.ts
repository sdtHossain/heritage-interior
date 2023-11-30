import type { UserJsonldUserReadComponent } from '@/openapi/components'
import { ApiUsersIdGet } from '@/openapi/operations'
import { reactive, toRaw } from 'vue'

interface AuthStoreState {
  idToken: null | string
  user: null | UserJsonldUserReadComponent
  userRole: null | string
  setToken(idToken: null | string): void
  getUserInfo(): void
}

export const authStore = reactive<AuthStoreState>({
  idToken: localStorage.getItem('idToken') ?? null,
  user: JSON.parse(localStorage.getItem('user')!) ?? null,
  userRole: localStorage.getItem('userRole') ?? null,
  async getUserInfo() {
    this.user = await ApiUsersIdGet('me')
    console.log('user info ', this.user)
    // console.log(toRaw(this.user).email)
    const rawUser = toRaw(this.user)
    console.log(rawUser)
    localStorage.setItem('user', JSON.stringify(rawUser))
    localStorage.setItem('userRole', 'contractor')
    this.userRole = localStorage.getItem('userRole')
  },
  async setToken(idToken) {
    console.log('Setting idToken: ', idToken)
    this.idToken = idToken
    if (idToken) {
      localStorage.setItem('idToken', idToken)
      try {
        this.getUserInfo()
      } catch (err) {
        console.log(err)
      }
    } else {
      this.user = null
    }
  }
})
