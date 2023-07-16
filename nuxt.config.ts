export default defineNuxtConfig({
  nitro: {
    prerender: {
      ignore: ['/__pinceau_tokens_config.json', '/__pinceau_tokens_schema.json']
    }
  },
  router: {
    baseURL: '/decapcms-custom-oauth-front/' // baseURL: '/<repository>/'
  },
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',
  modules: [
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ]
})
