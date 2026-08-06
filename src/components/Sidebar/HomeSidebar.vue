<template>
  <div class="flex flex-col h-screen">
    <div class="px-8 py-6">
      <h1 class="text-[18px] font-semibold">{{ t('home') }}</h1>
    </div>

    <div class="flex-1">
      <div class="px-4">
        <ul>
          <li v-for="item in items">
            <div
              class="flex items-center py-2 px-3 hover:dark:bg-neutral-600 hover:bg-neutral-200 rounded-xl"
            >
              <UIcon class="size-4" :name="item.icon" />
              <span class="ml-2 text-[15px] dark:text-white/80">{{
                item.name
              }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div class="flex items-center justify-between px-6 py-4">
          <h4 class="text-sm font-semibold">{{ t('quick_access') }}</h4>
          <UIcon class="size-4" name="i-lucide-plus" />
        </div>
      </div>
    </div>

    <div>
      <div class="flex space-x-2 bg-blue-700/60 text-blue-300 items-center px-6 py-3 mx-2 my-2 rounded-xl">
        <div class="border-[3px] border-blue-600/80 p-2 rounded-full">
          <UIcon class="size-3" name="i-lucide-chart-pie" />
        </div>
        <div class="flex-1">
          <span class="text-[12px]">1.5GB of 1TB</span>
        </div>
        <div>
          <UIcon class="size-6" name="i-lucide-chevron-up" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const items = ref([
  {
    name: t('all_files'),
    icon: 'i-lucide-files',
  },
  {
    name: t('photos'),
    icon: 'i-lucide-image',
  },
  {
    name: t('shared'),
    icon: 'i-lucide-users',
  },
  {
    name: t('file_request'),
    icon: 'i-lucide-file-down',
  },
  {
    name: t('deleted_files'),
    icon: 'i-lucide-trash',
  },
])
</script>
