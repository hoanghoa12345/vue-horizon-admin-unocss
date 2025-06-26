<template>
  <div
    class="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start"
  >
    <UForm
      :schema="schema"
      :state="state"
      @submit="handleSubmit"
      class="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]"
    >
      <UCard class="mb-4 w-full">
        <div class="flex flex-col items-center justify-between">
          <img
            :src="app.config.logo"
            :alt="app.config.app_name"
            class="mb-4 h-12 w-60"
          />
        </div>
        <div>
          <UFormField class="my-4" :label="$t('username')" name="username">
            <UInput
              size="xl"
              leading
              leading-icon="i-lucide-user-round"
              class="w-full"
              :placeholder="$t('please_enter_username')"
              v-model="state.username"
            />
          </UFormField>
          <UFormField class="my-4" :label="$t('password')" name="password">
            <UInput
              size="xl"
              type="password"
              leading
              leading-icon="i-lucide-lock"
              class="w-full"
              :placeholder="$t('please_enter_password')"
              trailing-icon="i-lucide-eye-off"
              v-model="state.password"
            />
          </UFormField>
          <UButton
            type="submit"
            class="font-bold"
            block
            size="xl"
            :loading="loading"
            >{{ $t('sign_in') }}</UButton
          >
        </div>
      </UCard>
    </UForm>
  </div>
</template>
<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'
import { apiConfig } from '~/services/apiConfig'

definePageMeta({
  layout: 'auth',
})

const { t } = useI18n()
const app = useAppStore()
const loading = ref<boolean>(false)

const schema = v.object({
  username: v.pipe(
    v.string(),
    v.minLength(4, t('username_must_be_at_least_3_characters'))
  ),
  password: v.pipe(
    v.string(),
    v.minLength(4, t('password_must_be_at_least_6_characters'))
  ),
})

type FormSchema = v.InferOutput<typeof schema>

const state = reactive({
  username: '',
  password: '',
})

const toast = useToast()
const router = useRouter()
const { is, can } = usePermissions()

const handleSubmit = async (event: FormSubmitEvent<FormSchema>) => {
  loading.value = true
  const res = await $fetch(apiConfig.LOGIN, {
    method: 'POST',
    body: event.data,
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': app.csrfToken,
    },
  }).catch((error) => {
    if (error.statusCode === 422) {
      const errors = error.data
      toast.add({
        title: t('error'),
        description: errors,
        color: 'danger',
      })
    } else {
      toast.add({
        title: t('error'),
        description: t('login_failed'),
        color: 'danger',
      })
    }
  })
  if (res) {
    app.setUser(res.data)
    router.push('/')
  }
  loading.value = false
}

watch(
  () => app.initialized,
  (initialized) => {
    if (initialized) {
      if (!is('guest') || can('write') || can('read') || can('upload')) {
        router.push('/')
      }
    }
  },
  { immediate: true }
)
</script>
