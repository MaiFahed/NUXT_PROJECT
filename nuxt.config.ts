export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  alias: {
  },

  css: [
    "~/assets/styles/main.css"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  modules: ["@nuxtjs/tailwindcss"],
  
  vite: {
    assetsInclude: ['**/*.PNG'], 
  },
  plugins: [
    '~/plugins/vue-toastification.js',
  ],
})