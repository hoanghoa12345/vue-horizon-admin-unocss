<template>
  <nav class="sticky top-4 z-40 bg-white dark:bg-[#0b14374d]">
    <div
      class="relative h-[48px] flex flex-row flex-wrap items-center justify-between gap-2 py-2"
    >
      <UButton
        icon="i-lucide-menu"
        size="md"
        color="neutral"
        variant="ghost"
        @click="emit('menu')"
        class="ml-px"
      />
      <UButton icon="i-lucide-plus" size="md" color="neutral" variant="solid">
        {{ $t('new') }}
      </UButton>
      <UInput
        size="xl"
        type="text"
        icon="i-carbon-search"
        :placeholder="$t('search')"
        variant="outline"
        class="flex-grow"
      >
      </UInput>
      <!-- Button dark mode toggle -->
      <div>
        <ColorModeButton />
      </div>
      <!-- Profile and dropdown -->
      <Menu as="div" class="relative inline-block text-left">
        <MenuButton>
          <img
            class="h-8 w-8 rounded-xl"
            src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/3d_4.png"
            alt="User"
          />
        </MenuButton>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none flex flex-col justify-start shadow-gray-500 dark:bg-gray-700 dark:text-white dark:shadow-none px-2 py-3"
          >
            <div class="mt-3 ml-4">
              <div class="flex items-center gap-2">
                <p class="text-sm font-bold text-slate-700 dark:text-white">
                  👋 Hey, {{ app.user.username }}
                </p>
              </div>
            </div>
            <div class="mt-3 h-px w-full bg-gray-200 dark:bg-white/20" />
            <div class="mt-3 ml-4 flex flex-col">
              <MenuItem v-slot="{ active }">
                <RouterLink
                  to="/"
                  class="text-sm no-underline text-gray-800 dark:text-white hover:dark:text-white"
                  :class="active ? 'font-bold' : ''"
                >
                  Profile Settings
                </RouterLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  to="/"
                  class="mt-3 text-sm no-underline text-gray-800 dark:text-white hover:dark:text-white"
                  :class="active ? 'font-bold' : ''"
                >
                  Newsletter Settings
                </RouterLink></MenuItem
              >
              <MenuItem v-slot="{ active }">
                <p
                  class="mt-3 text-sm cursor-pointer font-medium text-red-500 hover:text-red-500"
                  :class="active ? 'font-bold' : ''"
                >
                  Log Out
                </p>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '~/stores/app'
import { useMobile } from '~/composables/useMobile'

const emit = defineEmits(['menu'])

const route = useRoute()
const app = useAppStore()
const mobile = useMobile(768)
</script>
