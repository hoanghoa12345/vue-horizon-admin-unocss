import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
const state = 'app'

export const useAppStore = defineStore(state, () => {
  /**
   * Current state of app
   */

  const isOpenSidebar = ref<boolean>(false)

  const isDark = ref<boolean>(false)

  function onCloseSidebar() {
    isOpenSidebar.value = !isOpenSidebar.value
  }

  function toggleDark() {
    if (isDark.value) {
      document.body.classList.remove('dark')
      isDark.value = false
    } else {
      document.body.classList.add('dark')
      isDark.value = true
    }
  }

  return {
    isOpenSidebar,
    onCloseSidebar,
    isDark,
    toggleDark,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore as any, import.meta.hot))
