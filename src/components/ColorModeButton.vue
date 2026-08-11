<template>
  <div class="inline-flex justify-center rounded-lg bg-gray-100 dark:bg-gray-800 p-1 border border-gray-200 dark:border-gray-700">
    <button @click="setTheme('system')" :class="[
      'px-3 py-1.5 text-xs font-medium rounded-md transition-colors',
      currentTheme === 'system'
        ? 'bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white'
        : 'text-gray-500 hover:text-gray-900 dark:hover:text-white',
    ]">
      <i class="ti ti-brightness-auto text-xl"></i>
    </button>
    <button @click="setTheme('light')" :class="[
      'px-3 py-1.5 text-xs font-medium rounded-md transition-colors',
      currentTheme === 'light'
        ? 'bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white'
        : 'text-gray-500 hover:text-gray-900 dark:hover:text-white',
    ]">
      <i class="ti ti-brightness-2 text-xl"></i>
    </button>
    <button @click="setTheme('dark')" :class="[
      'px-3 py-1.5 text-xs font-medium rounded-md transition-colors',
      currentTheme === 'dark'
        ? 'bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white'
        : 'text-gray-500 hover:text-gray-900 dark:hover:text-white',
    ]">
      <i class="ti ti-moon text-xl"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentTheme = ref('system')

onMounted(() => {
  currentTheme.value = localStorage.getItem('theme') || 'system'
})

const setTheme = (mode) => {
  currentTheme.value = mode
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  if (mode === 'system') {
    localStorage.removeItem('theme')
    if (mediaQuery.matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  } else {
    localStorage.setItem('theme', mode)
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}
</script>
