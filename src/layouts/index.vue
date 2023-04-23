<template>
  <div class="flex h-full w-full">
    <sidebar :open="store.isOpenSidebar" @on-close="store.onCloseSidebar" />
    <div class="h-full w-full bg-blue-100 dark:bg-slate-900">
      <main
        class="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]"
      >
        <div class="h-full">
          <navbar />
          <div class="pt-5 mx-auto mb-auto h-full min-h-[48vh] p-2 md:pr-2">
            <router-view />
          </div>
          <div class="pt-3">Footer</div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from '@/components/Sidebar/index.vue'
import Navbar from '@/components/Navbar/index.vue'

const store = useAppStore()
</script>

<style lang="css" scoped></style>
