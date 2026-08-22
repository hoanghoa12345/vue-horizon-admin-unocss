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

if (!query.token) {
  await navigateTo('/login')
}

onMounted(() => {
  app.setCsrfToken(query.token as string)
})
</script>
<template>
  <NuxtLayout>
    <div class="py-4 px-3 flex justify-between items-center">
      <h4 class="dark:text-white text-2xl font-medium">{{ t('all_files') }}</h4>
      <SwitchLayout v-model="app.currentView" />
    </div>
    <div class="flex-1 px-3 overflow-y-auto">
      <FolderGridLayout v-if="app.currentView === 'grid'" :items="app.tree" />
      <FolderListLayout v-else-if="app.currentView === 'list'" :items="app.tree" />
    </div>
  </NuxtLayout>
</template>
