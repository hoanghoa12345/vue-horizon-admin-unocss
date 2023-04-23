import { LoginInput } from '@/types/auth'
import { defineStore } from 'pinia'
import {
  loginRequest,
  logoutRequest,
  profileRequest,
} from '@/services/requests/auth'
import { User } from '@/types/user'
const state = 'auth'
const storeKey = 'access-token'
export const useAuthStore = defineStore(state, () => {
  const router = useRouter()
  const user = ref<User>()

  const token = ref<string>('')

  if (localStorage.getItem(storeKey)) {
    token.value = localStorage.getItem(storeKey) ?? ''
  }

  watch(
    () => token,
    (tokenVal) => {
      localStorage.setItem(storeKey, tokenVal.value)
    },
    { deep: true }
  )

  function login(data: LoginInput) {
    loginRequest(data).then((response) => {
      user.value = response.data.user
      token.value = response.data.token
      router.push({ name: 'home' })
    })
  }

  function logout() {
    logoutRequest().then((response) => {
      console.log('logged out!', response.data)
    })
    router.push({ name: 'auth.login' })
  }

  function fetchProfile() {
    profileRequest().then((response) => {
      user.value = response.data.user
    })
  }

  return { user, token, login, logout, fetchProfile }
})
