<template>
  <div class="inline-block text-left" ref="triggerContainer">
    <div @click="togglePopover" ref="triggerRef">
      <slot name="trigger" />
    </div>

    <Teleport to="body">
      <Transition enter-active-class="transition duration-150 ease-out" enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-100 ease-in"
        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
        <div v-if="isOpen" ref="popoverRef"
          class="fixed z-50 w-64 rounded-xl bg-white dark:bg-zinc-900 shadow-xl border border-gray-200 dark:border-zinc-800 p-4 text-gray-900 dark:text-gray-100 focus:outline-none"
          :style="positionStyle">
          <slot name="content" :close="closePopover" />
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  align: {
    type: String,
    default: 'left', // 'left', 'right', 'center'
    validator: (val) => ['left', 'right', 'center'].includes(val)
  }
})

const isOpen = ref(false)
const triggerContainer = ref(null)
const triggerRef = ref(null)
const popoverRef = ref(null)
const positionStyle = ref({})

const updatePosition = () => {
  if (!triggerRef.value) return
  const rect = triggerRef.value.getBoundingClientRect()

  let left = rect.left
  let top = rect.bottom + 8

  if (props.align === 'right') {
  } else if (props.align === 'center') {
    left = rect.left + (rect.width / 2) - 128
  }

  positionStyle.value = {
    top: `${top}px`,
    left: `${left}px`,
    ...(props.align === 'right' ? { right: `${window.innerWidth - rect.right}px`, left: 'auto' } : {})
  }
}

const togglePopover = async () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    await nextTick()
    updatePosition()
  }
}

const closePopover = () => {
  isOpen.value = false
}

const handleClickOutside = (event) => {
  const isClickInsideTrigger = triggerContainer.value && triggerContainer.value.contains(event.target)
  const isClickInsidePopover = popoverRef.value && popoverRef.value.contains(event.target)

  if (!isClickInsideTrigger && !isClickInsidePopover) {
    closePopover()
  }
}

const handleScrollOrResize = () => {
  if (isOpen.value) {
    updatePosition()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', handleScrollOrResize)
  window.addEventListener('scroll', handleScrollOrResize, true)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', handleScrollOrResize)
  window.removeEventListener('scroll', handleScrollOrResize, true)
})
</script>
