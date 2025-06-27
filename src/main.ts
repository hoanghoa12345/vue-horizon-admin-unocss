import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ui from '@nuxt/ui/vue-plugin'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import App from './App.vue'
import en from '~/i18n/locales/en.json'
import vi from '~/i18n/locales/vi.json'

const app = createApp(App)

const router = createRouter({
  routes: [],
  history: createWebHistory(),
})

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  availableLocales: ['en', 'vi'],
  messages: {
    en,
    vi,
  },
})

const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(i18n)
app.use(ui)

app.mount('#app')
