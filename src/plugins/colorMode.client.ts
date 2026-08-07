export default defineNuxtPlugin(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  const updateTheme = () => {
    const theme = localStorage.getItem('theme')

    if (theme === 'dark' || (!theme && mediaQuery.matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  updateTheme()

  mediaQuery.addEventListener('change', () => {
    if (!localStorage.getItem('theme')) {
      updateTheme()
    }
  })

  useHead({
    script: [
      {
        innerHTML: `
          const theme = localStorage.getItem('theme');
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (theme === 'dark' || (!theme && prefersDark)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        `,
        tagPriority: 'critical',
      },
    ],
  })
})
