<template>
  <div
    class="relative float-right h-full min-h-screen w-full bg-white dark:bg-gray-900"
  >
    <main class="mx-auto min-h-screen">
      <div class="relative flex">
        <div
          class="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]"
        >
          <div
            class="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full"
          >
            <router-link to="/" class="no-underline w-max lg:pt-10">
              <div
                class="mx-auto flex h-fit w-fit items-center hover:cursor-pointer"
              >
                <div class="i-carbon-chevron-left"></div>
                <p class="ml-3 text-sm text-gray-600">Back to Dashboard</p>
              </div>
            </router-link>
            <router-view />
            <div
              class="absolute right-0 hidden h-full min-h-screen md:block lg:w-[49vw] 2xl:w-[44vw]"
            >
              <div
                class="absolute flex h-full w-full items-end justify-center bg-cover bg-center lg:rounded-bl-[120px] xl:rounded-bl-[200px]"
                style="background-image: url(https://picsum.photos/500/500)"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup></script>
