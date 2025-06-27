<template>
  <div class="relative flex">
    <div class="flex" @onmousedown="openDropdown" @click="openDropdown">
      <slot name="button" />
    </div>
    <div
      :class="`${isOpen ? 'scale-100' : 'scale-0'} ${props.class}`"
      class="absolute -bottom-12 right-0 z-10 origin-top-right transition-all duration-300 ease-in-out"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps({
  class: String,
})
const isOpen = ref<boolean>(false)
const openDropdown = () => {
  isOpen.value = !isOpen.value
}
</script>
