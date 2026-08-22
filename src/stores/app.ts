import type { AppConfig } from '~/types/config'
import type { User } from '~/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('appStore', () => {
  const initialized = ref(false)
  const config = ref<AppConfig>({
    pagination: ['', '5', '10', '15'],
  })
  const user = ref<User>({
    role: 'guest',
    permissions: [],
    name: 'Demo User',
    username: '',
    email: 'test@cloud-drive.io',
    avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/3d_4.png',
  })
  const cwd = ref({
    location: '/',
    content: [],
  })
  const sidebar = ref({
    open: false,
    openContentSidebar: false,
  })
  const tree = ref({})
  const csrfToken = ref('')
  const currentView = ref<'list' | 'grid'>('grid')

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
  const toggleSidebar = () => {
    sidebar.value.open = !sidebar.value.open
  }
  const toggleContentSidebar = () => {
    sidebar.value.openContentSidebar = !sidebar.value.openContentSidebar
  }

  const logout = () => {
    user.value = {
      role: 'guest',
      permissions: [],
      name: '',
      username: '',
      email: '',
      avatar: '',
    }
  }

  return {
    initialized,
    config,
    user,
    cwd,
    tree,
    csrfToken,
    currentView,
    sidebar,
    toggleSidebar,
    toggleContentSidebar,
    setConfig,
    setUser,
    setCsrfToken,
    setInitialized,
    hasPermission,
    logout
  }
})
