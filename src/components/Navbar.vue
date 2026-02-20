<template>
  <nav
    class="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between dark:bg-[#0b14374d]"
  >
    <!-- <div class="ml-[6px]">
      <UTooltip :text="$t('my_drive')">
      <RouterLink to="/">
        <Logo size="40" :color="isDark ? 'white' : 'black'" />
      </RouterLink>
      </UTooltip>
    </div> -->

    <div
      class="relative flex h-[48px] flex-grow items-center justify-around gap-2 py-2"
    >
      <UButton
        v-if="mobile.isMobile.value"
        icon="i-lucide-menu"
        size="md"
        color="neutral"
        variant="ghost"
        @click="emit('menu')"
        class="ml-[68px]"
      />
      <UButton icon="i-lucide-plus" size="xl" color="neutral" variant="solid">
        {{ $t('new') }}
      </UButton>
      <UInput
        size="xl"
        type="text"
        icon="i-carbon-search"
        :placeholder="$t('search')"
        variant="outline"
      >
      </UInput>
      <!-- Button dark mode toggle -->
      <div>
        <ColorModeButton />
      </div>
      <!-- Profile and dropdown -->
      <Dropdown class="py-2 top-8 -left-[180px] w-max">
        <template #button>
          <img
            class="h-10 w-10 rounded-xl"
            src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/3d_4.png"
            alt="User"
          />
        </template>
        <template #content>
          <div
            class="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-gray-500 dark:bg-gray-700 dark:text-white dark:shadow-none"
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
              <RouterLink
                to="/"
                class="text-sm no-underline text-gray-800 dark:text-white hover:dark:text-white"
              >
                Profile Settings
              </RouterLink>
              <RouterLink
                to="/"
                class="mt-3 text-sm no-underline text-gray-800 dark:text-white hover:dark:text-white"
              >
                Newsletter Settings
              </RouterLink>
              <p
                class="mt-3 text-sm cursor-pointer font-medium text-red-500 hover:text-red-500"
              >
                Log Out
              </p>
            </div>
          </div>
        </template>
      </Dropdown>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import Dropdown from '~/components/Dropdown/index.vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '~/stores/app'
import { useColorMode } from '@nuxt/ui/runtime/vue/stubs.js'
import { computed } from 'vue'
import { useMobile } from '~/composables/useMobile'

const emit = defineEmits(['menu'])

const route = useRoute()
const app = useAppStore()

const colorMode = useColorMode()
const mobile = useMobile(768)

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  },
})
</script>
