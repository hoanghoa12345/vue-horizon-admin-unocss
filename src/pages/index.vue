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
const currentView = ref<'grid' | 'list'>('grid')

onMounted(() => {
  if (!query.user) {
    router.replace('/login')
  }
})
</script>
<template>
  <NuxtLayout>
    <div class="py-4 px-3 flex justify-between items-center">
      <h4 class="dark:text-white text-2xl font-medium">{{ t('all_files') }}</h4>
      <SwitchLayout v-model="currentView" />
    </div>
    <div class="flex-1 px-3 overflow-y-auto">
      <FolderGridLayout v-if="currentView === 'grid'" />
      <FolderListLayout v-else-if="currentView === 'list'" />
    </div>
  </NuxtLayout>
</template>
