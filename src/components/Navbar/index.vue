<template>
  <nav
    class="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rouned-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]"
  >
    <div class="ml-[6px]">
      <div class="h-6 w-[224px] pt-1">
        <a
          href=""
          class="text-sm font-normal text-slate-700 no-underline hover:underline dark:text-white dark:hover:text-white"
        >
          Pages
          <span
            class="mx-1 text-sm text-slate-700 hover:text-slate-600 dark:text-white"
            >/</span
          >
          <NuxtLink
            to="/"
            class="text-sm font-normal capitalize text-slate-700 no-underline hover:underline dark:text-white dark:hover:text-white"
            >{{ route.meta.name }}</NuxtLink
          >
        </a>
      </div>
      <p
        class="shrink my-0 text-[33px] capitalize text-slate-700 dark:text-white"
      >
        <NuxtLink
          to="/"
          class="font-bold capitalize text-slate-700 no-underline hover:underline dark:text-white dark:hover:text-white"
          >{{ route.meta.title }}</NuxtLink
        >
      </p>
    </div>

    <div
      class="relative mt-[3px] flex h-[48px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-gray-500 dark:bg-slate-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2"
    >
      <div
        class="flex h-full items-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-white xl:w-[225px]"
      >
        <div class="pl-3 pr-2 text-xl">
          <div class="i-carbon-search h-4 w-4 text-gray-400 dark:text-white" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          class="block h-full w-full rounded-full bg-slate-100 text-sm font-medium text-slate-700 outline-none placeholder:text-gray-400 dark:bg-slate-900 dark:text-white dark:placeholder:text-white sm:w-fit outline-none border-none"
        />
      </div>

      <span
        class="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
      >
        <div class="i-carbon-menu w-5 h-5" />
      </span>

      <!-- Dropdown notification -->
      <Dropdown class="py-2 top-4 -left-[230px] md:-left-[440px] w-max">
        <template #button>
          <div class="cursor-pointer">
            <div
              class="i-carbon-notification h-5 w-5 text-gray-600 dark:text-white"
            />
          </div>
        </template>
        <template #content>
          <div
            class="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-gray-500 dark:!bg-slate-700 dark:text-white dark:shadow-none sm:w-[460px]"
          >
            <div class="flex items-center justify-between">
              <p class="text-base font-bold text-slate-700 dark:text-white">
                Notification
              </p>
              <p class="text-sm font-bold text-slate-700 dark:text-white">
                Mark all read
              </p>
            </div>

            <button
              class="flex w-full items-center bg-white border-none font-sans dark:bg-slate-700"
            >
              <div
                class="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-purple-500 to-blue-500 py-4 text-2xl text-white"
              >
                <div class="i-carbon-arrow-up" />
              </div>
              <div
                class="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm"
              >
                <p
                  class="mb-1 text-left text-base font-bold text-gray-900 dark:text-white"
                >
                  New Update: Horizon Admin
                </p>
                <p
                  class="font-base text-left text-xs text-gray-900 dark:text-white"
                >
                  A new update for your downloaded item is available!
                </p>
              </div>
            </button>

            <button
              class="flex w-full items-center bg-white border-none font-sans dark:bg-slate-700"
            >
              <div
                class="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-purple-500 to-blue-500 py-4 text-2xl text-white"
              >
                <div class="i-carbon-arrow-up" />
              </div>
              <div
                class="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm"
              >
                <p
                  class="mb-1 text-left text-base font-bold text-gray-900 dark:text-white"
                >
                  New Update: Horizon Admin
                </p>
                <p
                  class="font-base text-left text-xs text-gray-900 dark:text-white"
                >
                  A new update for your downloaded item is available!
                </p>
              </div>
            </button>
          </div>
        </template>
      </Dropdown>
      <!-- Dropdown info -->
      <div class="cursor-pointer">
        <div
          class="i-carbon-information h-5 w-5 text-gray-600 dark:text-white"
        />
      </div>
      <!-- Button dark mode toggle -->
      <div class="cursor-pointer" >
        <!-- <div
          v-if="app.isDark"
          class="i-carbon-sun h-5 w-5 text-gray-600 dark:text-white"
        />
        <div
          v-else
          class="i-carbon-moon h-5 w-5 text-gray-600 dark:text-white"
        /> -->
      </div>
      <!-- Profile and dropdown -->
      <Dropdown class="py-2 top-8 -left-[180px] w-max">
        <template #button>
          <img
            class="h-10 w-10 rounded-full"
            src="https://picsum.photos/200/200"
            alt="User"
          />
        </template>
        <template #content>
          <div
            class="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-gray-500 dark:bg-gray-700 dark:text-white dark:shadow-none"
          >
            <div class="mt-3 ml-4">
              <div class="flex items-center gap-2">
                <p class="text-sm font-bold text-slate-700 dark:text-white">
                  👋 Hey, 
                </p>
              </div>
            </div>
            <div class="mt-3 h-px w-full bg-gray-200 dark:bg-white/20" />

            <div class="mt-3 ml-4 flex flex-col">
              <NuxtLink
                to="/"
                class="text-sm no-underline text-gray-800 dark:text-white hover:dark:text-white"
              >
                Profile Settings
              </NuxtLink>
              <NuxtLink
                to="/"
                class="mt-3 text-sm no-underline text-gray-800 dark:text-white hover:dark:text-white"
              >
                Newsletter Settings
              </NuxtLink>
              <p
                class="mt-3 text-sm cursor-pointer font-medium text-red-500 hover:text-red-500"
              >
                Log Out
              </p>
            </div>
          </div>
        </template>
      </Dropdown>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import Dropdown from '@/components/Dropdown/index.vue'
const route = useRoute()
</script>
