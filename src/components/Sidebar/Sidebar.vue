<template>
  <TransitionRoot :show="open" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-96"
    enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
    leave-to="-translate-x-96"
    class="mt-16 lg:mt-0 duration-175 fixed z-50 h-screen flex justify-between transition-all xl:translate-x-0 dark:bg-neutral-800 dark:text-white md:z-50 lg:z-50 xl:z-0 border-t border-gray-200 dark:border-neutral-700">
    <div
      class="flex flex-col border-r h-screen overflow-y-auto border-gray-200 dark:border-neutral-700 w-17 bg-neutral-100 dark:bg-neutral-800 z-50">
      <div class="flex items-center justify-center pt-4">
        <div :aria-label="t('my_drive')">
          <NuxtLink to="/">
            <Logo width="36"/>
          </NuxtLink>
        </div>
      </div>

      <div class="mt-4 flex-1">
        <ul>
          <li v-for="route in routes" @click="navigate(route.routeName)" class="">
            <div v-if="route.isPopover"
              class="relative mb-3 hover:cursor-pointer cursor-pointer px-3 py-2">
              <Popover align="left">
                <template #trigger>
                  <div
                    class="flex flex-col items-center gap-2">
                    <div :class="checkIsActiveRoute(route.routeName)
                      ? ' bg-gray-200 dark:bg-neutral-600 '
                      : 'bg-transparent'
                      " class="rounded-lg p-3 hover:bg-gray-200 dark:hover:bg-neutral-600">
                      <i :class="route.icon" class="text-xl" />
                    </div>
                    <p class="leading-1 flex text-xs">
                      {{ route.name }}
                    </p>
                  </div>
                </template>
                <template #content="{ close }">
                  <div class="size-48 m-4 inline-flex">
                    <div>
                      {{ route.name }}
                    </div>
                  </div>
                </template>
              </Popover>
            </div>
            <div v-else
              class="relative mb-3 flex flex-col hover:cursor-pointer cursor-pointer items-center px-3 py-2 gap-2">
              <div :class="checkIsActiveRoute(route.routeName)
                ? ' bg-gray-200 dark:bg-neutral-600 '
                : 'bg-transparent'
                " class="rounded-lg p-3 hover:bg-gray-200 dark:hover:bg-neutral-600">
                <i :class="route.icon" class="text-xl" />
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
          <button type="button">
            <i class="ti ti-help-circle text-xl"></i>
          </button>
        </div>
        <div class="mt-4 flex items-center px-4">
          <button type="button" @click="$emit('onToggleContentSidebar')">
            <i class="ti ti-layout-sidebar-left-collapse text-xl"></i>
          </button>
        </div>
      </div>
    </div>
    <TransitionRoot :show="openContentSidebar" enter="transition ease-in-out duration-300 transform"
      enter-from="-translate-x-96" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
      leave-from="translate-x-0" leave-to="-translate-x-96"
      class="w-62.5 bg-neutral-100 dark:bg-neutral-800 border-r border-gray-200 dark:border-neutral-700 z-40 overflow-y-auto">
      <HomeSidebar v-if="currentRoute?.routeName == 'home'"/>
      <div v-else-if="currentRoute?.routeName == 'folders'">Folders</div>
    </TransitionRoot>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TransitionRoot } from '@headlessui/vue'
import HomeSidebar from './HomeSidebar.vue'

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
const { t } = useI18n()
const routes: RouteItem[] = [
  {
    icon: 'ti ti-home',
    name: 'Home',
    routeName: 'home',
    isPopover: false,
  },
  {
    icon: 'ti ti-folders',
    name: 'Folders',
    routeName: 'folders',
    isPopover: false,
  },
  {
    icon: 'ti ti-bell',
    name: 'Activity',
    routeName: 'activity',
    isPopover: true,
  },
  {
    icon: 'ti ti-grid-dots',
    name: 'More',
    routeName: 'more',
    isPopover: true,
  },
]
const currentRoute = ref<RouteItem | undefined>(routes[0]!)

function checkIsActiveRoute(routeName: string): boolean {
  return currentRoute.value?.routeName === routeName
}

function navigate(routeName: string): void {
  currentRoute.value =
    routes.find((route) => route.routeName === routeName) || routes[0]
}
</script>
