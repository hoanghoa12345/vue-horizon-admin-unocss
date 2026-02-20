<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import FolderGridLayout from '~/components/FolderLayouts/FolderGridLayout.vue'
import FolderListLayout from '~/components/FolderLayouts/FolderListLayout.vue'
import { useAppStore } from '~/stores/app'

const { t } = useI18n()
const app = useAppStore()

const items = ref([
  { value: 'list', icon: 'i-lucide-layout-list' },
  {
    value: 'grid',
    icon: 'i-lucide-layout-grid',
  },
])

const active = computed({
  get() {
    return app.currentView
  },
  set(tab) {
    app.currentView = tab
  },
})
</script>
<template>
  <div>
    <div class="py-4 flex justify-between items-center">
      <h4>{{ t('my_drive') }}</h4>
      <UTabs v-model="active" :items="items" color="secondary" />
    </div>
    <div>
      <FolderGridLayout v-if="active === 'grid'" />
      <FolderListLayout v-else-if="active === 'list'" />
    </div>
  </div>
</template>
