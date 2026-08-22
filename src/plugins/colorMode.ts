export type ColorMode = "light" | "dark";

export default defineNuxtPlugin(() => {
  const colorMode = useCookie<ColorMode | null>("theme", {
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });

  const applyTheme = (theme: ColorMode) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      colorMode.value = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      colorMode.value = "light";
    }
  };

  if (import.meta.client) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const getTheme = (): ColorMode => {
      if (colorMode.value) {
        return colorMode.value;
      }

      return mediaQuery.matches ? "dark" : "light";
    };

    applyTheme(getTheme());

    const onSystemThemeChange = () => {
      if (!colorMode.value) {
        applyTheme(mediaQuery.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", onSystemThemeChange);

    const { $colorMode } = useNuxtApp();

    // Optional cleanup isn't normally necessary for a
    // long-lived Nuxt app, but you can keep the listener.
  }

  useHead({
    htmlAttrs: {
      class: colorMode.value === 'dark'
        ? 'dark'
        : undefined,
    },
  })
});
