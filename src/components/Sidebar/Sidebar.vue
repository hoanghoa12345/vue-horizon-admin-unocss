<template>
  <TransitionRoot
    :show="open"
    enter="transition ease-in-out duration-300 transform"
    enter-from="-translate-x-96"
    enter-to="translate-x-0"
    leave="transition ease-in-out duration-300 transform"
    leave-from="translate-x-0"
    leave-to="-translate-x-96"
    class="mt-16 lg:mt-0 duration-175 fixed z-50 h-screen flex justify-between transition-all xl:translate-x-0 dark:bg-slate-800 dark:text-white md:z-50 lg:z-50 xl:z-0 border-t border-gray-200 dark:border-gray-700"
  >
    <div
      class="flex flex-col border-r h-screen overflow-y-auto border-gray-200 dark:border-gray-700 w-[68px] bg-white dark:bg-slate-800 z-50"
    >
      <div class="flex items-center justify-center pt-4">
        <UTooltip :text="$t('my_drive')">
          <RouterLink to="/">
            <Logo size="30" :color="isDark ? 'white' : 'black'" />
          </RouterLink>
        </UTooltip>
      </div>

      <div class="mt-4 flex-1">
        <ul>
          <li
            v-for="route in routes"
            @click="navigate(route.routeName)"
            class=""
          >
            <div
              v-if="route.isPopover"
              class="relative mb-3 flex flex-col hover:cursor-pointer cursor-pointer items-center px-3 py-2 gap-2"
            >
              <UPopover
                :content="{
                  align: 'center',
                  side: 'right',
                  sideOffset: 8,
                }"
                modal
              >
                <div
                  :class="
                    checkIsActiveRoute(route.routeName)
                      ? ' bg-gray-200 dark:bg-slate-600 '
                      : 'bg-transparent'
                  "
                  class="rounded-lg p-3 hover:bg-gray-200"
                >
                  <UIcon class="size-5" :name="route.icon" />
                </div>
                <p class="leading-1 flex text-xs">
                  {{ route.name }}
                </p>
                <template #content>
                  <div class="size-48 m-4 inline-flex">
                    <div>
                      {{ route.name }}
                    </div>
                  </div>
                </template>
              </UPopover>
            </div>
            <div
              v-else
              class="relative mb-3 flex flex-col hover:cursor-pointer cursor-pointer items-center px-3 py-2 gap-2"
            >
              <div
                :class="
                  checkIsActiveRoute(route.routeName)
                    ? ' bg-gray-200 dark:bg-slate-600 '
                    : 'bg-transparent'
                "
                class="rounded-lg p-3 hover:bg-gray-200"
              >
                <UIcon class="size-5" :name="route.icon" />
              </div>
              <p class="leading-1 flex text-xs">
                {{ route.name }}
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div class="flex flex-col pb-4 mb-16 lg:mb-0">
        <div class="mt-4 flex items-center px-4">
          <UButton
            icon="i-lucide-message-circle-question-mark"
            size="lg"
            color="neutral"
            variant="ghost"
          />
        </div>
        <div class="mt-4 flex items-center px-4">
          <UButton
            icon="i-lucide-panel-right"
            size="lg"
            color="neutral"
            variant="ghost"
            @click="$emit('onToggleContentSidebar')"
          />
        </div>
      </div>
    </div>
    <TransitionRoot
      :show="openContentSidebar"
      enter="transition ease-in-out duration-300 transform"
      enter-from="-translate-x-96"
      enter-to="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leave-from="translate-x-0"
      leave-to="-translate-x-96"
      class="w-[250px] bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-gray-700 z-40 overflow-y-auto"
    >
      <div v-if="currentRoute.routeName == 'home'">Home</div>
      <div v-else-if="currentRoute.routeName == 'folders'">Folders</div>
    </TransitionRoot>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useColorMode } from '@nuxt/ui/runtime/vue/stubs.js'
import { TransitionRoot } from '@headlessui/vue'

type RouteItem = {
  icon: string
  name: string
  routeName: string
  isPopover?: boolean
}

const props = defineProps({
  open: Boolean,
  openContentSidebar: Boolean,
})
const emit = defineEmits(['onClose', 'onToggleContentSidebar'])
const routes: RouteItem[] = [
  {
    icon: 'i-lucide-home',
    name: 'Home',
    routeName: 'home',
    isPopover: false,
  },
  {
    icon: 'i-lucide-folders',
    name: 'Folders',
    routeName: 'folders',
    isPopover: false,
  },
  {
    icon: 'i-lucide-bell',
    name: 'Activity',
    routeName: 'activity',
    isPopover: true,
  },
  {
    icon: 'i-lucide-grip',
    name: 'More',
    routeName: 'more',
    isPopover: true,
  },
]
const currentRoute = ref<RouteItem>(routes[0])
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  },
})

function checkIsActiveRoute(routeName: string): boolean {
  return currentRoute.value.routeName === routeName
}

function navigate(routeName: string): void {
  currentRoute.value =
    routes.find((route) => route.routeName === routeName) || routes[0]
}
</script>
