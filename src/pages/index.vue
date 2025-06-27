<script lang="ts" setup>
const { t } = useI18n()
const app = useAppStore()

const items = ref([
  {
    icon: 'i-lucide-layout-list',
  },
  {
    icon: 'i-lucide-layout-grid',
  }
])
</script>
<template>
  <div class="py-4 flex justify-between items-center">
    <h4>{{ t('my_drive') }}</h4>
    <UTabs :items="items" color="secondary" />
  </div>
  <div>

  </div>
</template>
