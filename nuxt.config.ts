// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  build: {
    analyze: true,
    transpile: ["trpc-nuxt"],
  },
  typescript: {
    shim: false,
  },
});
