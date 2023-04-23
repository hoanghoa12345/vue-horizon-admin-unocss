<template>
  <Card class="flex flex-row flex-grow items-center rounded-[20px]">
    <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
      <div class="rounded-full bg-primary-500 p-3 dark:bg-slate-700">
        <span class="flex items-center text-blue-500 dark:text-white">
          <div :class="`${icon} text-3xl`"></div>
        </span>
      </div>
    </div>

    <div class="h-36 ml-4 flex w-auto flex-col justify-center">
      <p class="my-0 text-sm font-medium text-gray-600">{{ title }}</p>
      <h4 class="my-0 text-xl font-bold text-slate-700 dark:text-white">
        {{ subtitle }}
      </h4>
    </div>
  </Card>
</template>
<script lang="ts" setup>
import Card from '../Card/Card.vue'
defineProps({
  icon: String,
  title: String,
  subtitle: String,
})
</script>
