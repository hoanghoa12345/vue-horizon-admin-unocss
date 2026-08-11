<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{
    align?: 'left' | 'right'
    width?: string
  }>(),
  {
    align: 'left',
    width: 'w-48',
  }
)

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

function toggle() {
  isOpen.value = !isOpen.value
}

function close() {
  isOpen.value = false
}

function handleClickOutside(e: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    close()
  }
}

const menuClasses = computed(() => [
  'absolute z-50 mt-2 rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none',
  'dark:bg-gray-800 dark:ring-white/10',
  props.width,
  props.align === 'right' ? 'right-0' : 'left-0',
])

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
  <div ref="dropdownRef" class="relative inline-block text-left">
    <div @click="toggle">
      <slot name="trigger" :is-open="isOpen" />
    </div>

    <div
      v-if="isOpen"
      :class="menuClasses"
    >
      <slot name="content" :close="close" />
    </div>
  </div>
</template>