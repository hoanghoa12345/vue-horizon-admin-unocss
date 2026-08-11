<template>
  <nav class="sticky top-4 z-40 bg-white dark:bg-[#0b14374d]">
    <div class="relative h-12 flex flex-row flex-wrap items-center justify-between gap-2 py-2">
      <button type="button" @click="emit('menu')" class="ml-px dark:text-white">
        <i class="ti ti-menu text-xl"></i>
      </button>
      <button
        class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
        {{ t('new') }}
        <i class="ti ti-plus"></i>
      </button>
      <label class="input flex grow">
        <svg class="size-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required :placeholder="t('search')" />
      </label>
      <!-- Profile and dropdown -->
      <Dropdown align="right">
        <template #trigger="{ isOpen }">
          <button>
            <img class="h-8 w-8 rounded-xl" src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/3d_4.png" alt="User" />
          </button>
        </template>
        <template #content="{ close }">
          <transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">

            <div
              class="w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none flex flex-col justify-start shadow-gray-500 dark:bg-gray-700 dark:text-white dark:shadow-none px-2 py-3">
              <div class="mt-3 ml-4">
                <div class="flex items-center gap-2">
                  <p class="text-sm font-bold text-slate-700 dark:text-white">
                    👋 Hey, {{ app.user.username }}
                  </p>
                </div>
              </div>
              <div class="mt-3 h-px w-full bg-gray-200 dark:bg-white/20" />
              <div class="mt-3 ml-4 flex flex-col">
                <RouterLink to="/" class="text-sm no-underline text-gray-800 dark:text-white hover:dark:text-white">
                  Profile Settings
                </RouterLink>
                <RouterLink to="/"
                  class="mt-3 text-sm no-underline text-gray-800 dark:text-white hover:dark:text-white">
                  Newsletter Settings
                </RouterLink>
                <p class="mt-3 text-sm cursor-pointer font-medium text-red-500 hover:text-red-500">
                  Log Out
                </p>
                <div>
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

const emit = defineEmits(['menu'])

const route = useRoute()
const app = useAppStore()
const mobile = useMobile(768)
</script>
