const LOCALES = ["en", "vi", "ar"] as const;

export type Locale = (typeof LOCALES)[number];

const DEFAULT_LOCALE: Locale = "en";

type LocaleMessages = Record<string, any>;

export const useI18n = () => {
  const localeCookie = useCookie<Locale>("locale", {
    sameSite: "lax",
    maxAge: 31536000,
  });

  const locale = useState<Locale>(
    "i18n-locale",
    () => localeCookie.value || DEFAULT_LOCALE
  );

  const messages = useState<Record<Locale, LocaleMessages>>(
    "i18n-messages",
    () => ({} as Record<Locale, LocaleMessages>)
  );

  const loaded = useState<Record<Locale, boolean>>(
    "i18n-loaded",
    () => ({} as Record<Locale, boolean>)
  );

  async function loadLocale(localeCode: Locale) {
    if (loaded.value[localeCode]) {
      return;
    }

    try {
      const module = await import(`~/i18n/locales/${localeCode}.json`);

      messages.value[localeCode] = module.default;
      loaded.value[localeCode] = true;
    } catch (err) {
      console.error(`Failed to load locale "${localeCode}"`, err);
    }
  }

  function getNestedValue(obj: unknown, path: string): string | undefined {
    return path.split(".").reduce<any>((acc, key) => acc?.[key], obj);
  }

  function t(key: string, params?: Record<string, string | number>): string {
    let text =
      getNestedValue(messages.value[locale.value], key) ??
      getNestedValue(messages.value[DEFAULT_LOCALE], key);

    if (!text) {
      return key;
    }

    if (params) {
      for (const [name, value] of Object.entries(params)) {
        text = text.replace(new RegExp(`\\{${name}\\}`, "g"), String(value));
      }
    }

    return text;
  }

  async function setLocale(localeCode: Locale) {
    if (!LOCALES.includes(localeCode)) {
      console.warn(`Unsupported locale: ${localeCode}`);
      return;
    }

    await loadLocale(localeCode);

    locale.value = localeCode;
    localeCookie.value = localeCode;

    if (import.meta.client) {
      document.documentElement.lang = localeCode;
      document.documentElement.dir = localeCode === "ar" ? "rtl" : "ltr";
    }
  }

  async function initI18n() {
    let initialLocale = localeCookie.value;

    if (!initialLocale && import.meta.server) {
      const acceptLanguage = useRequestHeader("accept-language");

      const browserLang = acceptLanguage
        ?.split(",")[0]
        ?.split("-")[0]
        ?.toLowerCase();

      if (browserLang && LOCALES.includes(browserLang as Locale)) {
        initialLocale = browserLang as Locale;
      }
    }

    initialLocale ??= DEFAULT_LOCALE;

    await loadLocale(DEFAULT_LOCALE);

    if (initialLocale !== DEFAULT_LOCALE) {
      await loadLocale(initialLocale);
    }

    locale.value = initialLocale;

    localeCookie.value = initialLocale;

    if (import.meta.client) {
      document.documentElement.lang = initialLocale;
      document.documentElement.dir = initialLocale === "ar" ? "rtl" : "ltr";
    }
  }

  async function switchLocale(localeCode: Locale) {
    await setLocale(localeCode);
    await reloadNuxtApp();
  }

  return {
    locale: readonly(locale),
    locales: LOCALES,
    messages: readonly(messages),
    t,
    loadLocale,
    setLocale,
    initI18n,
    switchLocale,
  };
};
