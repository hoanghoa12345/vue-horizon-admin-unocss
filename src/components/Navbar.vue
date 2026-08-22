<template>
  <nav class="sticky top-0 z-10">
    <div class="relative px-4 py-2 flex flex-row items-center justify-between gap-4 bg-white dark:bg-neutral-900">
      <button type="button" @click="emit('menu')" class="ml-px dark:text-white flex lg:hidden">
        <i class="ti ti-menu text-xl"></i>
      </button>
      <button
        class="inline-flex items-center space-x-1 text-white bg-neutral-900 dark:bg-white dark:text-black box-border border border-transparent hover:bg-neutral-800 focus:ring-4 focus:ring-blue-500 shadow-xs font-normal leading-5 rounded-xl text-[13px] px-4 py-1.5 focus:outline-none">
        <i class="ti ti-plus text-xl"></i>
        <span>{{ t('new') }}</span>
      </button>
      <label class="flex items-center h-10 w-ful text-sm border border-gray-500/30 rounded-xl grow">
        <svg class="size-4 text-gray-500 dark:text-neutral-300 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search"
          class="outline-none text-gray-500 dark:text-neutral-300 dark:placeholder:text-neutral-400 bg-transparent h-full w-full placeholder:text-neutral-500 font-normal" required
          :placeholder="t('search')" />
      </label>
      <Dropdown align="right">
        <template #trigger="{ isOpen }">
          <button type="button"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-sm size-8 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700">
            <span class="sr-only">Open user menu</span>
            <img class="h-full w-full rounded-lg object-cover" :src="app.user.avatar" :alt="app.user.name" />
          </button>
        </template>
        <template #content="{ close }">
          <transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">

            <div
              class="w-56 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none flex flex-col justify-start shadow-gray-500 dark:bg-neutral-800 dark:text-white dark:shadow-none px-2 py-3">
              <div class="px-4 py-2">
                <div class="flex items-center gap-2">
                  <p class="text-sm font-bold text-slate-700 dark:text-white">
                  <div class="flex items-center gap-2">
                    <img class="h-8 w-8 rounded-xl" :src="app.user.avatar" :alt="app.user.name" />
                    <div class="flex flex-col">
                      <span class="text-md font-normal">{{ app.user.name }}</span>
                      <span class="text-[10px] font-normal text-slate-500 dark:text-white/70">
                        {{ app.user.email }}
                      </span>
                    </div>
                  </div>
                  </p>
                </div>
              </div>
              <div class="mt-3 h-px w-full bg-gray-200 dark:bg-white/20" />
              <div class="mt-3 ml-4 flex flex-col">
                <RouterLink to="/" class="text-sm no-underline text-gray-800 dark:text-white hover:dark:text-white">
                  {{t("settings")}}
                </RouterLink>
                <RouterLink to="/"
                  class="mt-3 text-sm no-underline text-gray-800 dark:text-white hover:dark:text-white">
                  {{t("manage_account")}}
                </RouterLink>
                <button type="button" @click="handleLogout" class="mt-3 text-sm text-left text-gray-800 dark:text-white hover:dark:text-white cursor-pointer">
                  {{t("log_out")}}
                </button>
                <div class="mt-3 flex items-center justify-between">
                  <ColorModeButton />
                </div>
              </div>
            </div>
          </transition>
        </template>
      </Dropdown>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useAppStore } from '~/stores/app'
import { useMobile } from '~/composables/useMobile'

const { t } = useI18n()
const router = useRouter()
const emit = defineEmits(['menu'])

const route = useRoute()
const app = useAppStore()
const mobile = useMobile(768)

const handleLogout = () => {
  app.logout()
  router.push('/login')
}
</script>
