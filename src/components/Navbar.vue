<template>
  <nav
    class="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rouned-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
    <div class="ml-[6px]">
      <UTooltip :text="$t('my_drive')">
      <NuxtLink to="/">
        <Logo size="40" :color="isDark ? 'white' : 'black'" />
      </NuxtLink>
      </UTooltip>
    </div>

    <div
      class="relative mt-[3px] flex h-[48px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-gray-500 dark:bg-slate-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
      <div
        class="flex h-full items-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-white xl:w-[225px]">
        <UInput size="xl" type="text" icon="i-carbon-search" :placeholder="$t('search_anything')" variant="ghost"
          color="neutral" :ui="{ root: 'rounded-full', base: 'rounded-full' }" />
      </div>

      <UButton icon="i-lucide-menu" size="md" color="neutral" variant="ghost" @click="emit('menu')" />
      <!-- Button dark mode toggle -->
      <div>
        <ColorModeButton />
      </div>
      <!-- Profile and dropdown -->
      <Dropdown class="py-2 top-8 -left-[180px] w-max">
        <template #button>
          <img class="h-10 w-10 rounded-full" src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/3d_4.png" alt="User" />
        </template>
        <template #content>
          <div
            class="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-gray-500 dark:bg-gray-700 dark:text-white dark:shadow-none">
            <div class="mt-3 ml-4">
              <div class="flex items-center gap-2">
                <p class="text-sm font-bold text-slate-700 dark:text-white">
                  👋 Hey, {{ app.user.username }}
                </p>
              </div>
            </div>
            <div class="mt-3 h-px w-full bg-gray-200 dark:bg-white/20" />

            <div class="mt-3 ml-4 flex flex-col">
              <NuxtLink to="/" class="text-sm no-underline text-gray-800 dark:text-white hover:dark:text-white">
                Profile Settings
              </NuxtLink>
              <NuxtLink to="/" class="mt-3 text-sm no-underline text-gray-800 dark:text-white hover:dark:text-white">
                Newsletter Settings
              </NuxtLink>
              <p class="mt-3 text-sm cursor-pointer font-medium text-red-500 hover:text-red-500">
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
import Dropdown from '@/components/Dropdown/index.vue'

const emit = defineEmits(['menu'])

const route = useRoute()
const app = useAppStore()

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  }
})
</script>
