<template>
  <div class="flex flex-col h-full">
    <div class="px-8 py-6">
      <h1 class="text-[18px] font-semibold">{{ t('home') }}</h1>
    </div>

    <div class="flex-1">
      <div class="px-4">
        <ul>
          <li v-for="item in items">
            <div class="flex items-center py-2 px-3 hover:dark:bg-neutral-600 hover:bg-neutral-200 rounded-xl">
              <i :class="item.icon" class="size-4" />
              <span class="ml-2 text-[15px] dark:text-white/80">{{ item.name }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div class="flex items-center justify-between px-6 py-4">
          <h4 class="text-sm font-semibold">{{ t('quick_access') }}</h4>
          <i class="ti ti-plus text-lg"></i>
        </div>
      </div>
    </div>

    <div>
      <div class="flex flex-col space-x-2 bg-neutral-200 dark:bg-neutral-700 items-center px-6 py-3 mx-2 my-2 rounded-2xl">
        <div class="flex items-center justify-between w-full mb-2">
          <span class="text-xs font-semibold">Explore features</span>
          <div>
            <i class="ti ti-chevron-up text-md"></i>
          </div>
        </div>
        <div class="flex w-full h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full overflow-hidden" role="progressbar"
          aria-valuenow="2" aria-valuemin="0" aria-valuemax="100">
          <div
            class="flex flex-col justify-center overflow-hidden bg-neutral-800 text-xs text-primary-foreground text-center whitespace-nowrap transition duration-500"
            style="width: 2%"></div>
        </div>
        <div class="w-full text-left">
          <span class="text-xs">Using <b>5.5GB</b> of <b>1TB</b></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const { t } = useI18n()

const items = ref([
  {
    name: t('all_files'),
    icon: 'ti ti-folders',
  },
  {
    name: t('photos'),
    icon: 'ti ti-photo',
  },
  {
    name: t('shared'),
    icon: 'ti ti-users',
  },
  {
    name: t('file_request'),
    icon: 'ti ti-file-download',
  },
  {
    name: t('deleted_files'),
    icon: 'ti ti-trash',
  },
])
</script>
