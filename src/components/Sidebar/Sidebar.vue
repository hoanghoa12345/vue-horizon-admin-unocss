<template>
  <div
    class="duration-175 fixed z-50 flex min-h-full justify-between transition-all xl:translate-x-0 dark:bg-slate-800 dark:text-white md:z-50 lg:z-50 xl:z-0"
    :class="open ? 'translate-x-0' : '-translate-x-96'"
  >
    <div
      class="flex flex-col min-h-full border-r border-gray-200 dark:border-gray-700 w-[68px] bg-white z-50"
    >
      <div class="flex items-center justify-center pt-4">
        <RouterLink to="/">
          <Logo size="40" />
        </RouterLink>
      </div>

      <div class="mt-4 flex-1">
        <ul>
          <li
            v-for="route in routes"
            @click="navigate(route.routeName)"
            class=""
          >
            <div v-if="route.isPopover" class="relative mb-3 flex flex-col hover:cursor-pointer cursor-pointer items-center px-3 py-2 gap-2">
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
                      ? ' bg-gray-200 '
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
                  <Placeholder class="size-48 m-4 inline-flex" />
                </template>
              </UPopover>
            </div>
            <div v-else class="relative mb-3 flex flex-col hover:cursor-pointer cursor-pointer items-center px-3 py-2 gap-2">
              <div
                :class="
                  checkIsActiveRoute(route.routeName)
                    ? ' bg-gray-200 '
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

      <div class="flex flex-col pb-4">
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
    <div
      class="w-[250px] bg-white dark:bg-neutral-900 transition-all duration-175 border-r border-gray-200 dark:border-gray-700 z-40"
      :class="openContentSidebar ? 'translate-x-0' : '-translate-x-96'"
    >
      <div v-if="currentRoute.routeName == 'home'">Home</div>
      <div v-else-if="currentRoute.routeName == 'folders'">Folders</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

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

function checkIsActiveRoute(routeName: string): boolean {
  return currentRoute.value.routeName === routeName
}

function navigate(routeName: string): void {
  currentRoute.value =
    routes.find((route) => route.routeName === routeName) || routes[0]
}
</script>
