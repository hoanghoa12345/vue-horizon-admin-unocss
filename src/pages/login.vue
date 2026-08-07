<template>
  <NuxtLayout>
    <header class="sticky top-0 z-40 flex flex-row flex-wrap items-center justify-between">
      <nav
        class="flex justify-between items-center border-b border-gray-200 px-4 py-2 dark:border-gray-700 dark:bg-gray-800 w-full">
        <div class="flex gap-2 items-center">
          <Logo size="40" />
          <h2 class="text-2xl font-bold font-sans">{{ t('cloud_drive') }}</h2>
        </div>
        <div>
          <button icon="i-lucide-globe" size="md" color="neutral" variant="ghost" />
        </div>
      </nav>
    </header>
    <div
      class="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-12 lg:mb-10 lg:items-center lg:justify-start">

    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import { ref } from 'vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { usePermissions } from '~/composables/usePermissions'
import { watch } from 'vue'

definePageMeta({
  layout: 'auth',
})

const { t } = useI18n()
const app = useAppStore()
const loading = ref<boolean>(false)

const state = reactive({
  username: '',
  password: '',
  remember_me: false,
  login_step: 1,
})

const router = useRouter()
const { is, can } = usePermissions()

watch(
  () => app.initialized,
  (initialized) => {
    if (initialized) {
      if (!is('guest') || can('write') || can('read') || can('upload')) {
        router.push('/')
      }
    }
  },
  { immediate: true }
)
</script>
