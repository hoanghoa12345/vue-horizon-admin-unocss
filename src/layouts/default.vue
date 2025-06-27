<template>
    <div class="flex h-full w-full">
        <Sidebar :open="open" @on-close="open = false" />
        <div class="h-full w-full">
            <main class="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]">
                <div class="h-full">
                    <Navbar @menu="open = !open"/>
                    <div class="pt-5 mx-auto mb-auto h-full min-h-[48vh] p-2 md:pr-2">
                        <slot />
                    </div>
                    <div class="pt-3">
                        <!-- Footer -->
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script lang="ts" setup>
const open = useState('open', () => false)
</script>

<style lang="css" scoped></style>