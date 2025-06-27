<template>
  <div>
    <main class="mx-auto min-h-screen">
      <div class="flex">
        <div
          class="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]"
        >
          <RouterView />
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup></script>
