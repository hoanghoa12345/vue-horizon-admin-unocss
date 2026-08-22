<script setup lang="ts">
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'

type ViewMode = 'grid' | 'list'

const props = defineProps<{
  modelValue: ViewMode
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: ViewMode): void
}>()

const active = computed({
  get: () => props.modelValue,
  set: (val: ViewMode) => emit('update:modelValue', val)
})

const options = [
  { value: 'grid' as const, label: 'Grid', icon: 'ti ti-layout-grid' },
  { value: 'list' as const, label: 'List', icon: 'ti ti-list' },
] as const
</script>

<template>
  <RadioGroup v-model="active" class="flex">
    <div class="inline-flex rounded-xl bg-zinc-100 dark:bg-neutral-700 p-1">
      <RadioGroupOption v-for="opt in options" :key="opt.value" :value="opt.value" v-slot="{ checked }" as="template">
        <button :class="[
          'relative inline-flex items-center gap-1.5 rounded-[0.6rem] px-3 py-1.5 text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500',
          checked ? 'bg-white dark:bg-neutral-50 text-zinc-900 shadow-sm ring-1 ring-black/5' : 'text-zinc-500 hover:text-zinc-700'
        ]" :title="opt.label">
          <i :class="[opt.icon, 'text- leading-none']" :title="opt.label"></i>
        </button>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>