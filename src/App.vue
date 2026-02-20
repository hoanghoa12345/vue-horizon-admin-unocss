<template>
  <UApp :locale="(locales as any)[locale]">
    <RouterView />
  </UApp>
</template>
<script setup lang="ts">
import { getConfig as getConfigApi, getUser as getUserApi } from '~/services/requests'
import * as locales from '@nuxt/ui/locale'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '~/stores/app'
import { usePermissions } from '~/composables/usePermissions'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const { locale } = useI18n()
const appStore = useAppStore()
const { is, can } = usePermissions()
const router = useRouter()

const getConfig = async () => {
  const data = await getConfigApi()
  appStore.setConfig(data)
}

const getUser = async () => {
  const user = await getUserApi()
  appStore.setUser(user)
  appStore.setInitialized(true)
  if (is('guest') && !can('write') && !can('read') && !can('upload')) {
    router.push('/login')
  }
}

onMounted(() => {
  // Promise.all([getConfig(), getUser()])
})
</script>
