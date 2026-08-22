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
  const tree = ref([
    {
      id: 1,
      name: 'Documents',
      itemCount: 24,
      lastModified: '2 days ago',
      size: '2.4 MB',
      type: 'Folder',
      children: [
        {
          id: 11,
          name: 'Reports',
          itemCount: 5,
          lastModified: '1 day ago',
          size: '1.2 MB',
          type: 'Folder'
        },
        {
          id: 12,
          name: 'Invoices.pdf',
          itemCount: 0,
          lastModified: '2 days ago',
          size: '500 KB',
          mimeType: 'application/pdf',
          type: 'File'
        },
        {
          id: 13,
          name: 'Meeting Notes.docx',
          itemCount: 10,
          lastModified: '3 days ago',
          size: '800 KB',
          mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          type: 'File'
        }
      ]
    },
    {
      id: 2,
      name: 'Images',
      itemCount: 156,
      lastModified: '1 week ago',
      size: '845 MB',
      type: 'Folder',
      children: [
        {
          id: 21,
          name: 'Vacation',
          itemCount: 50,
          lastModified: '2 weeks ago',
          size: '500 MB',
          type: 'Folder'
        }
      ]
    },
    {
      id: 3,
      name: 'Projects',
      itemCount: 8,
      lastModified: 'Yesterday',
      size: '156 MB',
      type: 'Folder',
      children: []
    },
    {
      id: 4,
      name: 'Downloads',
      itemCount: 42,
      lastModified: '3 hours ago',
      size: '1.2 GB',
      type: 'Folder',
      children: []
    },
    {
      id: 5,
      name: 'Videos',
      itemCount: 12,
      lastModified: '5 days ago',
      size: '3.8 GB',
      type: 'Folder',
      children: []
    },
    {
      id: 6,
      name: 'Music',
      itemCount: 89,
      lastModified: '1 month ago',
      size: '578 MB',
      type: 'Folder',
      children: []
    },
    {
      id: 7,
      name: 'Archive',
      itemCount: 3,
      lastModified: '2 weeks ago',
      size: '89 MB',
      type: 'Folder',
      children: []
    },
    {
      id: 8,
      name: 'Templates',
      itemCount: 15,
      lastModified: '4 days ago',
      size: '45 MB',
      type: 'Folder',
      children: []
    },
  ])
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

  const getFolder = (folderName: string) => {
    return tree.value.find(folder => folder.name === folderName)
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
    logout,
    getFolder,
  }
})
