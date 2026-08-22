<template>
  <div>
    <div class="border-b border-gray-200 dark:border-neutral-600 px-6 py-3">
      <div class="grid grid-cols-12 gap-4 text-xs font-medium text-gray-500 dark:text-white tracking-wider">
        <div class="col-span-6 md:col-span-5">{{ t("name") }}</div>
        <div class="col-span-2 md:col-span-2 hidden sm:block">{{ t("size") }}</div>
        <div class="col-span-2 md:col-span-2 hidden md:block">{{ t("type") }}</div>
        <div class="col-span-4 md:col-span-3">{{ t("last_modified") }}</div>
      </div>
    </div>
    <div class="divide-y divide-gray-100 dark:divide-neutral-600">
      <div v-for="item in items" :key="item.id"
        class="px-6 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors duration-200 cursor-pointer group">
        <NuxtLink :to="`/folders/${item.name}?token=${token}`" class="grid grid-cols-12 gap-4 items-center">
          <div class="col-span-6 md:col-span-5 flex items-center space-x-3">
            <div class="shrink-0 w-8 h-8 group-hover:scale-110 transition-transform duration-200">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full text-blue-400 group-hover:text-blue-600">
                <path
                  d="M2 6C2 4.89543 2.89543 4 4 4H9L11 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6Z"
                  fill="currentColor" />
              </svg>
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-sm font-normal text-gray-900 dark:text-neutral-50 group-hover:text-blue-700 truncate">
                {{ item.name }}
              </p>
            </div>
          </div>

          <div class="col-span-2 md:col-span-2 hidden sm:block">
            <p class="text-sm text-gray-600 dark:text-neutral-400">{{ item.size }}</p>
          </div>

          <div class="col-span-2 md:col-span-2 hidden md:block">
            <span
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-600/40 text-blue-800 dark:text-blue-200">
              {{ item.type }}
            </span>
          </div>

          <div class="col-span-4 md:col-span-3">
            <p class="text-sm text-gray-600 dark:text-neutral-400">{{ item.lastModified }}</p>
            <p class="text-xs text-gray-400 sm:hidden">{{ item.itemCount }} items</p>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div v-if="items.length === 0" class="text-center py-12">
      <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5L12 5H5a2 2 0 00-2 2z"></path>
      </svg>
      <p class="text-gray-500 text-sm">No folders found</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  currentView: {
    type: String,
    default: 'list'
  },
  items: {
    type: Array,
    required: true
  }
})

const { t } = useI18n()

const emit = defineEmits(['view-change'])
const token = useRoute().query.token || ''

const addFolder = () => {
  const newId = items.value.length + 1
  const folderName = `New Folder ${newId}`
  items.value.push({
    id: newId,
    name: folderName,
    itemCount: 0,
    lastModified: 'Just now',
    size: '0 KB',
    type: 'Folder'
  })
}
</script>

<style scoped>
.container {
  max-width: 1400px;
}
</style>
