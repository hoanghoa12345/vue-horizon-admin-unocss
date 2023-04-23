<template>
  <div class="grid place-content-center">
    <h2 class="text-center font-sans">404 - Not Found!</h2>
    <button
      class="px-2 py-2 w-full bg-blue-500 text-white border-0 rounded-md hover:bg-blue-400"
      type="button"
      @click="handleGoBack"
    >
      Go Back
    </button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'NotFound',
}
</script>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const handleGoBack = (event: Event) => {
  console.log('[Event]: ' + event)

  router.push('/')
}
</script>

<style lang="scss" scoped></style>
