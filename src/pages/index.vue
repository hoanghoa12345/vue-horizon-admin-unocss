<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useAppStore } from '~/stores/app';

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
