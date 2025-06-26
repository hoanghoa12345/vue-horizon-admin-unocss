<template>
  <UApp :locale="locales[locale]">
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<script setup lang="ts">
import { apiConfig } from '~/services/apiConfig'
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()
const appStore = useAppStore()
const { is, can } = usePermissions()
const router = useRouter()

const getConfig = async () => {
  const config = await $fetch(apiConfig.GET_CONFIG)
  appStore.setConfig(config.data)
}

const getUser = async () => {
  const user = await $fetch.raw(apiConfig.GET_USER)
  const csrfToken = user.headers.get('x-csrf-token')
  appStore.setUser(user._data.data)
  appStore.setCsrfToken(csrfToken || '')
  appStore.setInitialized(true)
  if (is('guest') && !can('write') && !can('read') && !can('upload')) {
    router.push('/login')
  }
}

onMounted(() => {
  getConfig()
  getUser()
})
</script>
