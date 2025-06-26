<template>
  <div
    class="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
    <form class="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
      <div class="flex flex-col items-center justify-between">
        <h4 class="mb-2.5 text-4xl font-bold text-black dark:text-white">
          Welcome Back
        </h4>
        <p class="mb-9 ml-1 text-base text-zinc-400">
          Welcome back, please enter your details
        </p>
      </div>
      <div>
        <div class="rounded-lg flex gap-2 bg-gray-200 p-1">
          <div class="px-2 py-3 bg-white rounded-md flex-1 text-center">Sign In</div>
          <div class="px-2 py-3 flex-1 text-center">Signup</div>
        </div>
        <div class="my-4">
          <UInput size="xl" leading leading-icon="i-lucide-mail" required class="w-full" placeholder="Email Address"
            trailing trailingIcon="i-lucide-circle-check" />
        </div>
        <UButton block size="xl">Continue</UButton>
      </div>
      <div class="mb-6 flex items-center gap-3">
        <div class="h-px w-full bg-gray-200 dark:bg-slate-700" />
        <p class="text-base text-gray-600 dark:text-white">or</p>
        <div class="h-px w-full bg-gray-200 dark:bg-slate-700" />
      </div>
      <div class="flex justify-center">
        <UButton class="rounded-full" icon="i-flat-color-icons-google" size="xl" color="neutral" variant="outline" />
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>

</script>