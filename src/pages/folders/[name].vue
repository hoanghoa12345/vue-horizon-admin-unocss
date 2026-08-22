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

const currentFolder = computed(() => {
  const folderName = route.params.name as string;
  return app.getFolder(folderName);
});

onMounted(() => {
  if (!currentFolder.value) {
    router.push('/404')
  }
})

</script>
<template>
  <NuxtLayout>
    <div class="py-4 px-3 flex justify-between items-end">
      <div class="flex flex-col items-start gap-3">
        <NuxtLink :to="{ name: 'index', query: { token: query.token } }"
          class="flex items-center gap-2 text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-white">
          <span class="text-sm">{{ t('all_files') }}</span>
        </NuxtLink>
        <h4 class="dark:text-white text-2xl font-medium">{{ currentFolder?.name || t('all_files') }}</h4>
      </div>
      <SwitchLayout v-model="app.currentView" />
    </div>
    <div class="flex-1 px-3 overflow-y-auto" v-if="currentFolder">
      <FolderGridLayout v-if="app.currentView === 'grid'" :items="currentFolder.children" />
      <FolderListLayout v-else-if="app.currentView === 'list'" :items="currentFolder.children" />
    </div>
  </NuxtLayout>
</template>
