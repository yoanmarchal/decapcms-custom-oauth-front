export default defineNuxtConfig({
  nitro: {
    prerender: {
      ignore: ['/__pinceau_tokens_config.json', '/__pinceau_tokens_schema.json']
    }
  },
  app: {
    baseURL: '/decapcms-custom-oauth-front/'
  },
  $production: {
    routeRules: {
      '/**': { ssr: true }
    }
  },
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',
  modules: [
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ]
})
