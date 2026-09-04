<script setup lang="ts">
import type { NuxtError } from '#app'

const { t } = useI18n()

const props = defineProps<{ error: NuxtError }>()
</script>

<template>
  <div class="min-h-screen grid place-content-center bg-gray-50 px-4">
    <div class="text-center max-w-md">
      <h1 class="text-9xl font-bold text-gray-900 tracking-tight">
        {{ error.statusCode || 404 }}
      </h1>

      <p class="mt-4 text-xl text-gray-600">
        {{ error.statusMessage || 'Page not found' }}
      </p>

      <p class="mt-2 text-gray-500">
        {{ t('could_not_find_the_page') }}
      </p>

      <NuxtLink to="/"
        class="mt-8 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
        <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        {{ t("go_back_home") }}
      </NuxtLink>
    </div>
  </div>
</template>