<template>
  <div class="mt-5 h-full">
    <div v-if="loading" class="flex justify-center items-center h-[60vh]">
      <Spinner />
    </div>
    <Card v-else class="h-full p-4">
      <div class="text-xl font-bold text-slate-700 dark:text-white">
        User Data
      </div>

      <div class="h-full overflow-x-scroll xl:overflow-x-hidden">
        <table class="mt-8 h-max w-full">
          <thead>
            <tr>
              <th
                class="border-b border-gray-200 border-b-solid pr-32 pb-[10px] text-start dark:border-gray-700"
              >
                <div
                  class="text-xs font-bold uppercase tracking-wide text-gray-600"
                >
                  ID
                </div>
              </th>
              <th
                class="border-b border-gray-200 border-b-solid pr-32 pb-[10px] text-start dark:border-gray-700"
              >
                <div
                  class="text-xs font-bold uppercase tracking-wide text-gray-600"
                >
                  Full Name
                </div>
              </th>
              <th
                class="border-b border-gray-200 border-b-solid pr-32 pb-[10px] text-start dark:border-gray-700"
              >
                <div
                  class="text-xs font-bold uppercase tracking-wide text-gray-600"
                >
                  Email
                </div>
              </th>
              <th
                class="border-b border-gray-200 border-b-solid pr-32 pb-[10px] text-start dark:border-gray-700"
              >
                <div
                  class="text-xs font-bold uppercase tracking-wide text-gray-600"
                >
                  Create At
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in data?.users.data">
              <td>
                <p class="text-sm font-bold text-gray-700 dark:text-white">
                  {{ user.id }}
                </p>
              </td>
              <td>
                <p class="text-sm font-bold text-gray-700 dark:text-white">
                  {{ user.name }}
                </p>
              </td>
              <td>
                <p class="text-sm font-bold text-gray-700 dark:text-white">
                  {{ user.email }}
                </p>
              </td>
              <td>
                <p class="text-sm font-bold text-gray-700 dark:text-white">
                  {{ user.created_at }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="flex space-x-2">
          <button
            class="inline-flex px-2 py-2 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-400 border border-blue-500 border-solid"
            type="button"
            @click="execute(currentPage - 1)"
          >
            <div class="i-carbon-chevron-left" />
            Previous
          </button>
          <button
            class="inline-flex px-2 py-2 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-400 border border-blue-500 border-solid"
            type="button"
            @click="execute(currentPage + 1)"
          >
            Next
            <div class="i-carbon-chevron-right" />
          </button>
        </div>
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import Card from '@/components/Card/Card.vue'
import Spinner from '@/components/Spinner/Spinner.vue'
import { useUsersTable } from '@/composables/usersTable'
const { data, error, loading, execute } = useUsersTable()
const currentPage = computed(() => data.value?.users.current_page ?? 1)
watchEffect(() => {
  console.log(data.value, error.value, loading.value)
})
</script>
