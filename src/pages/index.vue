<script lang="ts" setup>
import { computed, ref } from 'vue'
import FolderGridLayout from '~/components/FolderLayouts/FolderGridLayout.vue'
import FolderListLayout from '~/components/FolderLayouts/FolderListLayout.vue'
import { useAppStore } from '~/stores/app'

const { t } = useI18n()
const app = useAppStore()
const route = useRoute();
const router = useRouter();
const query = route.query;

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

onMounted(() => {
  if (!query.user) {
    router.replace('/login')
  }
})
</script>
<template>
  <NuxtLayout>
    <div class="py-4 flex justify-between items-center">
      <h4 class="dark:text-white">{{ t('my_drive') }}</h4>
      <div data-component="Tabs" :items="items" color="secondary" />
    </div>
    <div>
      <FolderGridLayout v-if="active === 'grid'" />
      <FolderListLayout v-else-if="active === 'list'" />
    </div>
  </NuxtLayout>
</template>
