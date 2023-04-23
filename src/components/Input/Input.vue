<template>
  <div :class="class">
    <label :for="name" class="text-sm text-slate-700 dark:text-white">{{
      label
    }}</label>
    <input
      class="mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-solid border-gray-400 bg-white/0 px-3 text-sm outline-none"
      :type="type"
      :placeholder="placeholder"
      @input="updateModelValue"
      :value="modelValue"
    />
  </div>
</template>
<script lang="ts" setup>
defineProps({
  name: String,
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
  class: String,
  modelValue: {
    type: String,
    required: true,
  },
})
const emit = defineEmits(['update:modelValue'])
const updateModelValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>
