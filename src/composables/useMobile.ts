// composables/useMobile.ts
import { ref, computed, onMounted, onUnmounted } from 'vue'

/**
 * Reactive mobile detection based on viewport width
 * @param breakpoint - max width (px) that is still considered "mobile" (default: 768)
 * @returns
 *   - isMobile: Ref<boolean> - true if current width ≤ breakpoint
 *   - windowWidth: Ref<number> - current viewport width
 */
export function useMobile(breakpoint = 768) {
  const windowWidth = ref(0)
  const isMobile = computed(() => windowWidth.value <= breakpoint)

  // Throttled resize handler (better performance than calling on every pixel change)
  let rafId: number | null = null

  const updateWidth = () => {
    // Use visualViewport if available (better for mobile with virtual keyboard)
    windowWidth.value = window.visualViewport?.width ?? window.innerWidth
  }

  const onResize = () => {
    if (rafId) cancelAnimationFrame(rafId)
    rafId = requestAnimationFrame(updateWidth)
  }

  onMounted(() => {
    updateWidth() // initial value
    window.addEventListener('resize', onResize, { passive: true })

    // Also listen to visualViewport changes (mobile keyboard, pinch zoom, etc.)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', onResize, {
        passive: true,
      })
    }
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
    if (window.visualViewport) {
      window.visualViewport.removeEventListener('resize', onResize)
    }
    if (rafId) cancelAnimationFrame(rafId)
  })

  return {
    isMobile,
    windowWidth,
    // Convenience aliases
    isMobileView: isMobile,
    isDesktop: computed(() => !isMobile.value),
  }
}
