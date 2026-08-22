export default defineNuxtPlugin({
    name: "i18n",
    enforce: "pre",
    async setup() {
        const { initI18n } = useI18n();
        await initI18n();
    },
});
