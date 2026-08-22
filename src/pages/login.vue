<template>
  <NuxtLayout>
    <header class="sticky top-0 z-40 flex flex-row flex-wrap items-center justify-between">
      <nav
        class="flex justify-between items-center border-b border-gray-200 px-4 py-2 dark:border-gray-700 dark:bg-gray-800 w-full">
        <div class="flex gap-2 items-center">
          <Logo size="40" />
          <h2 class="text-xl font-semibold font-sans dark:text-white">
            {{ t('cloud_drive') }}
          </h2>
        </div>
        <div>
          <Menu as="div" class="relative inline-block text-left">
            <MenuButton
              class="inline-flex w-full items-center justify-center gap-x-2 rounded-xl px-4 py-2 text-sm font-medium text-zinc-700 hover:ring-1 ring-zinc-200 hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500">
              <i class="ti ti-world text-lg"></i>
              <i class="ti ti-chevron-down size-4 text-zinc-400"></i>
            </MenuButton>

            <transition enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0">
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-xl bg-white p-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div class="px-3 py-2 text-[11px] font-medium text-zinc-400">
                  {{ t("select_language") }}
                </div>
                <MenuItem v-for="lang in languages" :key="lang.code" v-slot="{ active }" as="template">
                  <button @click="switchLocale(lang.code)" :class="[
                    active ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-700',
                    'group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm'
                  ]">
                    <span class="flex-1 text-left">{{ lang.label }}</span>
                    <i v-if="locale === lang.code" class="ti ti-check size-4 text-violet-600"></i>
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </nav>
    </header>
    <div
      class="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-12 lg:mb-10 lg:items-center lg:justify-start">
      <button type="button" :disabled="loading"
        class="w-full max-w-sm text-white bg-blue-500 box-border border border-transparent hover:bg-blue-500-strong focus:ring-4 focus:ring-blue-500-medium shadow-xs font-medium leading-5 rounded-xl text-sm px-4 py-2.5 focus:outline-none disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        @click="handleOAuth2Login">
        <span v-if="loading" class="space-x-2"><i class="ti ti-loader animate-spin"></i></span>
        <span v-else class="space-x-2">{{ t("continue_with_oauth") }}</span>
      </button>
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
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

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

interface Language {
  code: Locale
  label: string
}

const { locale, switchLocale } = useI18n();

const languages: Language[] = [
  { code: 'en', label: 'English' },
  { code: 'vi', label: 'Tiếng Việt' }
]

const handleOAuth2Login = () => {
  loading.value = true;
  window.location.href = '/?user=test&token=1234567890abcdef&expires_in=3600';
}

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
