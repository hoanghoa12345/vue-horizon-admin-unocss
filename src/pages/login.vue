<template>
  <div>
    <header
      class="sticky top-0 z-40 flex flex-row flex-wrap items-center justify-between"
    >
      <nav
        class="flex justify-between items-center border-b border-gray-200 px-4 py-2 dark:border-gray-700 dark:bg-gray-800 w-full"
      >
        <div class="flex gap-2 items-center">
          <Logo size="40" />
          <h2 class="text-2xl font-bold font-sans">{{ t('cloud_drive') }}</h2>
        </div>
        <div>
          <UButton
            icon="i-lucide-globe"
            size="md"
            color="neutral"
            variant="ghost"
          />
        </div>
      </nav>
    </header>
    <div
      class="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start"
    >
      <UForm
        :schema="schema"
        :state="state"
        @submit="handleSubmit"
        class="mt-[10vh] w-full max-w-[420px] flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]"
      >
        <div class="mb-4 w-full">
          <div>
            <div v-if="state.login_step === 1">
              <UFormField class="my-4" :label="$t('email')" name="username">
                <UInput
                  size="xl"
                  class="w-full"
                  :placeholder="$t('please_enter_username')"
                  v-model="state.username"
                />
              </UFormField>
            </div>
            <div v-if="state.login_step === 2">
              <UButton
                icon="i-lucide-arrow-left"
                size="md"
                color="neutral"
                variant="ghost"
                @click="state.login_step = 1"
              >
                Back
              </UButton>
              <div class="my-4 mt-2 text-center">
                <h2 class="text-2xl font-semibold py-2">{{ $t('welcome_back') }}</h2>
                <div>
                  <p>{{ $t('login_using') }}</p>
                  <p>{{ state.username }}</p>
                </div>
              </div>

              <UFormField class="my-4" :label="$t('password')" name="password">
                <UInput
                  size="xl"
                  type="password"
                  class="w-full"
                  :placeholder="$t('please_enter_password')"
                  trailing-icon="i-lucide-eye"
                  @trailing-icon-click="togglePasswordVisibility"
                  v-model="state.password"
                />
              </UFormField>
              <div class="my-4">
                <UCheckbox v-model="state.remember_me" :label="$t('remember_me')" />
              </div>
            </div>

            <UButton
              type="submit"
              class="font-bold bg-blue-500 text-white hover:bg-blue-400 h-12"
              block
              size="xl"
              :loading="loading"
              >{{
                state.login_step === 1 ? $t('continue') : $t('sign_in')
              }}</UButton
            >
          </div>
        </div>
      </UForm>
    </div>
  </div>
</template>
<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '~/stores/app'
import { ref } from 'vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { usePermissions } from '~/composables/usePermissions'
import { watch } from 'vue'
import { login } from '~/services/requests'

const { t } = useI18n()
const app = useAppStore()
const loading = ref<boolean>(false)

const schema = v.object({
  username: v.pipe(
    v.string(),
    v.minLength(4, t('username_must_be_at_least_3_characters'))
  ),
  password: v.pipe(
    v.string()
    // v.minLength(4, t('password_must_be_at_least_6_characters'))
  ),
})

type FormSchema = v.InferOutput<typeof schema>

const state = reactive({
  username: '',
  password: '',
  remember_me: false,
  login_step: 1,
})

const toast = useToast()
const router = useRouter()
const { is, can } = usePermissions()

const handleSubmit = async (event: FormSubmitEvent<FormSchema>) => {
  if (state.login_step === 1) {
    state.login_step = 2
    return
  }
  try {
    loading.value = true
    const data = await login(event.data)
    app.setUser(data)
    router.push('/')
  } catch (error) {
    toast.add({
      title: t('error'),
      description: t('login_failed'),
      color: 'error',
    })
  } finally {
    loading.value = false
  }
}

const togglePasswordVisibility = () => {
  console.log('toggled')
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
