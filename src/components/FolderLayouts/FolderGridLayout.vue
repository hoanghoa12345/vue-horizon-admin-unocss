<template>
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
      <NuxtLink
        v-for="item in items" 
        :key="item.id"
        class="hover:shadow-lg hover:bg-elevated transition-all duration-300 px-4 py-6 cursor-pointer group bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
        :to="`/folders/${item.name}?token=${token}`"
      >
        <div class="flex flex-col items-center text-center">
          <div class="w-24 h-24 mb-3 group-hover:scale-110 transition-transform duration-200">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              class="w-full h-full text-blue-400 group-hover:text-blue-400"
            >
              <path 
                d="M2 6C2 4.89543 2.89543 4 4 4H9L11 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6Z" 
                fill="currentColor"
              />
            </svg>
          </div>
          <h3 class="text-sm font-medium text-gray-800 dark:text-neutral-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 mb-1 truncate w-full">{{ item.name }}</h3>
          <p class="text-xs text-gray-500">{{ item.itemCount }} items</p>
          <p class="text-xs text-gray-400">{{ item.lastModified }}</p>
        </div>
      </NuxtLink>
    </div>

    <div v-if="items.length === 0" class="text-center py-12">
      <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5L12 5H5a2 2 0 00-2 2z"></path>
      </svg>
      <p class="text-gray-500 text-sm">No folders found</p>
    </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const token = useRoute().query.token || ''

const addFolder = () => {
  const newId = items.value.length + 1
  const folderName = `New Folder ${newId}`
  items.value.push({
    id: newId,
    name: folderName,
    itemCount: 0,
    lastModified: 'Just now'
  })
}
</script>
