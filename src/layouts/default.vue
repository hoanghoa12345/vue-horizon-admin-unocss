<template>
  <div class="flex h-screen w-full">
    <Sidebar
      :open="appStore.sidebar.open"
      :open-content-sidebar="appStore.sidebar.openContentSidebar"
      @on-close="appStore.toggleSidebar"
      @on-toggle-content-sidebar="appStore.toggleContentSidebar"
    />
    <div class="h-full w-full">
      <main
        class="mx-[12px] h-full flex-none transition-all md:px-2"
        :class="computedMarginSidebar"
      >
        <div class="h-full">
          <Navbar @menu="toggleSidebar" />
          <div class="pt-5 mx-auto mb-auto h-full min-h-[48vh] p-2 md:pr-2">
            <RouterView />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue'
import { useMobile } from '~/composables/useMobile'
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()
const mobile = useMobile(480)

const computedMarginSidebar = computed(() => {
  if (mobile.isMobile.value) return 'ml-0'
  if (appStore.sidebar.open) return 'ml-[68px]'
  return appStore.sidebar.openContentSidebar ? 'xl:ml-[313px]' : 'ml-[68px]'
})

watch(
  () => mobile.isMobile.value,
  () => {
    appStore.sidebar.open = false
    appStore.sidebar.openContentSidebar = true
  }
)

const toggleSidebar = () => {
  appStore.toggleSidebar()
  if (mobile.isMobile.value) {
    if (appStore.sidebar.open) {
      appStore.sidebar.openContentSidebar = true
    } else {
      appStore.sidebar.openContentSidebar = false
    }
  }
  if (mobile.isDesktop.value) {
    appStore.toggleContentSidebar()
  }
}
</script>

<style lang="css" scoped></style>
