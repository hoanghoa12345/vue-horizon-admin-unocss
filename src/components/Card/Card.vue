<template>
  <div
    class="z-5 relative rounded-[20px] bg-white bg-clip-border shadow-2xl dark:bg-slate-800 dark:text-white dark:shadow-none"
    :class="class"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  class: String,
})
</script>
