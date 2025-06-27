<template>
  <div
    class="sm:hidden duration-175 fixed z-50 md:flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all xl:translate-x-0 dark:bg-slate-800 dark:text-white md:z-50 lg:z-50 xl:z-0"
    :class="open ? 'translate-x-0' : '-translate-x-96'"
  >
    <span
      class="absolute top-4 right-4 block cursor-pointer xl:hidden"
      @click="emit('onClose')"
    >
      <div class="i-carbon-close text-2xl" />
    </span>

    <div class="mx-[56px] mt-[50px] flex items-center">
      <div
        class="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-slate-700 dark:text-white"
      >
        Horizon <span class="font-medium">Admin</span>
      </div>
    </div>

    <div class="mt-[58px] mb-7 h-px bg-gray-300">
      <ul class="mb-auto pt-1">
        <li
          v-for="route in routes"
          @click="navigate(route.routeName)"
          class="relative mb-3 flex hover:cursor-pointer my-[3px] flex cursor-pointer items-center px-8"
        >
          <span
            :class="
              checkIsActiveRoute(route.routeName)
                ? 'font-bold text-brand-500 dark:text-white'
                : 'font-medium text-gray-600 dark:text-gray-400'
            "
          >
            <div :class="route.icon"></div>
          </span>
          <p
            class="leading-1 ml-4 flex"
            :class="
              checkIsActiveRoute(route.routeName)
                ? 'font-bold text-navy-700 dark:text-white'
                : 'font-medium text-gray-600 dark:text-gray-400'
            "
          >
            {{ route.name }}
          </p>
          <div
            v-if="checkIsActiveRoute(route.routeName)"
            class="absolute right-0 top-px h-9 w-1 rounded-lg bg-gray-500 dark:bg-gray-400"
          ></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
type RouteItem = {
  icon: string
  name: string
  routeName: string
}
const route = useRoute()
const router = useRouter()
const props = defineProps({
  open: Boolean,
})
const emit = defineEmits(['onClose'])
const routes: RouteItem[] = [
  {
    icon: 'i-carbon-home',
    name: 'Home',
    routeName: 'home',
  },
  {
    icon: 'i-carbon-group',
    name: 'Users',
    routeName: 'users.list',
  },
]

function checkIsActiveRoute(routeName: string): boolean {
  return route.matched.some(({ name }) => name === routeName)
}

function navigate(routeName: string): void {
  try {
    router.push({ name: routeName })
  } catch (error) {
    router.push('/404')
  }
}
</script>
