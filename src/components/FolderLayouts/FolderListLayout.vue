<template>
    <div class="bg-default rounded-lg shadow-sm border border-default overflow-hidden">
      <!-- Table Header -->
      <div class="bg-gray-50 border-b border-gray-200 px-6 py-3">
        <div class="grid grid-cols-12 gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
          <div class="col-span-6 md:col-span-5">Name</div>
          <div class="col-span-2 md:col-span-2 hidden sm:block">Size</div>
          <div class="col-span-2 md:col-span-2 hidden md:block">Type</div>
          <div class="col-span-4 md:col-span-3">Modified</div>
        </div>
      </div>

      <!-- List Items -->
      <div class="divide-y divide-gray-100">
        <div 
          v-for="item in items" 
          :key="item.id"
          class="px-6 py-4 hover:bg-blue-50 transition-colors duration-200 cursor-pointer group"
          @click="openFolder(item)"
        >
          <div class="grid grid-cols-12 gap-4 items-center">
            <!-- Name Column -->
            <div class="col-span-6 md:col-span-5 flex items-center space-x-3">
              <!-- Folder Icon -->
              <div class="flex-shrink-0 w-8 h-8 group-hover:scale-110 transition-transform duration-200">
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
              <div class="min-w-0 flex-1">
                <p class="text-sm font-medium text-gray-900 group-hover:text-blue-700 truncate">
                  {{ item.name }}
                </p>
              </div>
            </div>

            <!-- Size Column -->
            <div class="col-span-2 md:col-span-2 hidden sm:block">
              <p class="text-sm text-gray-600">{{ item.size }}</p>
            </div>

            <!-- Type Column -->
            <div class="col-span-2 md:col-span-2 hidden md:block">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {{ item.type }}
              </span>
            </div>

            <!-- Modified Column -->
            <div class="col-span-4 md:col-span-3">
              <p class="text-sm text-gray-600">{{ item.lastModified }}</p>
              <p class="text-xs text-gray-400 sm:hidden">{{ item.itemCount }} items</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="items.length === 0" class="text-center py-12">
        <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5L12 5H5a2 2 0 00-2 2z"></path>
        </svg>
        <p class="text-gray-500 text-sm">No folders found</p>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Props
const props = defineProps({
  currentView: {
    type: String,
    default: 'list'
  }
})

// Emits
const emit = defineEmits(['view-change'])

// Reactive data - folder items with additional list view properties
const items = ref([
  { 
    id: 1, 
    name: 'Documents', 
    itemCount: 24, 
    lastModified: '2 days ago',
    size: '2.4 MB',
    type: 'Folder'
  },
  { 
    id: 2, 
    name: 'Images', 
    itemCount: 156, 
    lastModified: '1 week ago',
    size: '845 MB',
    type: 'Folder'
  },
  { 
    id: 3, 
    name: 'Projects', 
    itemCount: 8, 
    lastModified: 'Yesterday',
    size: '156 MB',
    type: 'Folder'
  },
  { 
    id: 4, 
    name: 'Downloads', 
    itemCount: 42, 
    lastModified: '3 hours ago',
    size: '1.2 GB',
    type: 'Folder'
  },
  { 
    id: 5, 
    name: 'Videos', 
    itemCount: 12, 
    lastModified: '5 days ago',
    size: '3.8 GB',
    type: 'Folder'
  },
  { 
    id: 6, 
    name: 'Music', 
    itemCount: 89, 
    lastModified: '1 month ago',
    size: '578 MB',
    type: 'Folder'
  },
  { 
    id: 7, 
    name: 'Archive', 
    itemCount: 3, 
    lastModified: '2 weeks ago',
    size: '89 MB',
    type: 'Folder'
  },
  { 
    id: 8, 
    name: 'Templates', 
    itemCount: 15, 
    lastModified: '4 days ago',
    size: '45 MB',
    type: 'Folder'
  },
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
