<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      <div 
        v-for="item in items" 
        :key="item.id"
        class="bg-default rounded-lg shadow-md hover:shadow-lg hover:bg-elevated transition-all duration-300 p-4 border border-gray-200 cursor-pointer group"
        @click="openFolder(item)"
      >
        <div class="flex flex-col items-center text-center">
          <!-- Folder Icon -->
          <div class="w-16 h-16 mb-3 group-hover:scale-110 transition-transform duration-200">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              class="w-full h-full text-blue-500 group-hover:text-blue-600"
            >
              <path 
                d="M2 6C2 4.89543 2.89543 4 4 4H9L11 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6Z" 
                fill="currentColor"
              />
            </svg>
          </div>
          <h3 class="text-sm font-medium text-gray-800 group-hover:text-blue-700 mb-1 truncate w-full">{{ item.name }}</h3>
          <p class="text-xs text-gray-500">{{ item.itemCount }} items</p>
          <p class="text-xs text-gray-400">{{ item.lastModified }}</p>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive data - folder items
const items = ref([
  { id: 1, name: 'Documents', itemCount: 24, lastModified: '2 days ago' },
  { id: 2, name: 'Images', itemCount: 156, lastModified: '1 week ago' },
  { id: 3, name: 'Projects', itemCount: 8, lastModified: 'Yesterday' },
  { id: 4, name: 'Downloads', itemCount: 42, lastModified: '3 hours ago' },
  { id: 5, name: 'Videos', itemCount: 12, lastModified: '5 days ago' },
  { id: 6, name: 'Music', itemCount: 89, lastModified: '1 month ago' },
  { id: 7, name: 'Archive', itemCount: 3, lastModified: '2 weeks ago' },
  { id: 8, name: 'Templates', itemCount: 15, lastModified: '4 days ago' },
  { id: 9, name: 'Backup', itemCount: 7, lastModified: '1 week ago' },
  { id: 10, name: 'Work Files', itemCount: 31, lastModified: 'Today' },
])

// Open folder function
const openFolder = (folder) => {
  console.log('Opening folder:', folder.name)
  // Add your folder opening logic here
}

// Add new folder function
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

<style scoped>
/* Additional custom styles if needed */
.container {
  max-width: 1400px;
}
</style>
