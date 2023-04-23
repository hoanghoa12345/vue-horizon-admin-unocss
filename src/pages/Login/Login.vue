<template>
  <div
    class="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start"
  >
    <form
      @submit.prevent="onSubmit"
      class="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]"
    >
      <h4 class="mb-2.5 text-4xl font-bold text-slate-700 dark:text-white">
        Sign In
      </h4>
      <p class="mb-9 ml-1 text-base text-gray-600">
        Enter your email and password to sign in!
      </p>
      <div
        class="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-blue-100 hover:cursor-pointer dark:bg-slate-800"
      >
        <div class="rounded-full text-xl">
          <div class="">Google</div>
        </div>
        <h5 class="text-sm font-medium text-slate-700 dark:text-white">
          Sign In with Google
        </h5>
      </div>
      <div class="mb-6 flex items-center gap-3">
        <div class="h-px w-full bg-gray-200 dark:bg-slate-700" />
        <p class="text-base text-gray-600 dark:text-white">or</p>
        <div class="h-px w-full bg-gray-200 dark:bg-slate-700" />
      </div>
      <Input
        label="Email"
        class="mb-3"
        placeholder="email@example.com"
        name="email"
        type="email"
        v-model="formData.email"
      />
      <Input
        label="Password"
        class="mb-3"
        placeholder="******"
        name="email"
        type="password"
        v-model="formData.password"
      />
      <button
        type="submit"
        class="linear mt-2 w-full rounded-xl bg-blue-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200 border border-blue-500 border-solid"
      >
        Sign In
      </button>
      <div class="mt-4">
        <span class="text-sm font-medium text-slate-700 dark:text-gray-600">
          Not registered yet?
        </span>
        <router-link
          :to="{ name: 'auth.login' }"
          class="ml-1 text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-white no-underline hover:underline"
        >
          Create an account</router-link
        >
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
import Input from '@/components/Input/Input.vue'
import { useAuthStore } from '@/stores/auth'

const formData = reactive({
  email: '',
  password: '',
})

const store = useAuthStore()
function onSubmit(event: Event) {
  store.login(formData)
}
</script>
