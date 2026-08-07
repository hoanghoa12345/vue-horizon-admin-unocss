import { readonly } from 'vue'

const LOCALES = ['en', 'vi'] as const
type Locale = (typeof LOCALES)[number]

const DEFAULT_LOCALE: Locale = 'en'

type LocaleMessages = Record<string, any>

const loadedLocales = new Set<Locale>()

export const useI18n = () => {
  const locale = useState<Locale>('locale', () => DEFAULT_LOCALE)

  const messages = useState<Record<Locale, LocaleMessages>>(
    'i18n-messages',
    () => ({} as Record<Locale, LocaleMessages>)
  )

  async function loadLocale(localeCode: Locale) {
    if (loadedLocales.has(localeCode)) return

    try {
      const module = await import(`~/i18n/locales/${localeCode}.json`)

      messages.value[localeCode] = module.default
      loadedLocales.add(localeCode)
    } catch (err) {
      console.error(`Failed to load locale "${localeCode}"`, err)
    }
  }

  function getNestedValue(obj: unknown, path: string): string | undefined {
    return path
      .split('.')
      .reduce<any>((acc, key) => acc?.[key], obj)
  }

  function t(
    key: string,
    params?: Record<string, string | number>
  ): string {
    let text =
      getNestedValue(messages.value[locale.value], key) ??
      getNestedValue(messages.value[DEFAULT_LOCALE], key)

    if (!text) return key

    if (params) {
      for (const [name, value] of Object.entries(params)) {
        text = text.replace(
          new RegExp(`\\{${name}\\}`, 'g'),
          String(value)
        )
      }
    }

    return text
  }

  async function setLocale(localeCode: Locale) {
    if (!LOCALES.includes(localeCode)) {
      console.warn(`Unsupported locale: ${localeCode}`)
      return
    }

    await loadLocale(localeCode)

    locale.value = localeCode

    if (import.meta.client) {
      localStorage.setItem('locale', localeCode)

      document.documentElement.lang = localeCode
      document.documentElement.dir =
        localeCode === 'ar' ? 'rtl' : 'ltr'
    }
  }

  async function initI18n() {
    await loadLocale(DEFAULT_LOCALE)

    let initialLocale: Locale = DEFAULT_LOCALE

    if (import.meta.client) {
      const stored = localStorage.getItem('locale')

      if (
        stored &&
        LOCALES.includes(stored as Locale)
      ) {
        initialLocale = stored as Locale
      } else {
        const browser = navigator.language.split('-')[0]

        if (
          LOCALES.includes(browser as Locale)
        ) {
          initialLocale = browser as Locale
        }
      }
    }

    await setLocale(initialLocale)
  }

  return {
    locale: readonly(locale),
    locales: LOCALES,
    messages: readonly(messages),
    t,
    loadLocale,
    setLocale,
    initI18n,

    switchLocale: async (localeCode: Locale) => {
      await setLocale(localeCode)
      await reloadNuxtApp()
    }
  }
}