import type { AppConfig } from '~/types/config'
import type { User } from '~/types/user'

export const useAppStore = defineStore('appStore', () => {
  const initialized = ref(false)
  const config = ref({
    pagination: ['', '5', '10', '15'],
  })
  const user = ref<User>({
    role: 'guest',
    permissions: [],
    name: '',
    username: '',
  })
  const cwd = ref({
    location: '/',
    content: [],
  })
  const tree = ref({})
  const csrfToken = ref('')

  const setConfig = (newConfig: AppConfig) => {
    config.value = { ...config.value, ...newConfig }
  }
  const setUser = (newUser: any) => {
    user.value = { ...user.value, ...newUser }
  }
  const setCsrfToken = (token: string) => {
    csrfToken.value = token
  }
  const setInitialized = (status: boolean) => {
    initialized.value = status
  }
  const hasPermission = (permission: string): boolean => {
    return user.value.permissions.includes(permission)
  }
  return {
    initialized,
    config,
    user,
    cwd,
    tree,
    csrfToken,
    setConfig,
    setUser,
    setCsrfToken,
    setInitialized,
    hasPermission,
  }
})
