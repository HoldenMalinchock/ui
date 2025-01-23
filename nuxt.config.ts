// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui"],
  devtools: { enabled: true },
  compatibilityDate: "2024-11-01",
  eslint: {
    config: {
      stylistic: {
        semi: false,
        quotes: "double",
        indent: 2,
      },
    },
  },
})