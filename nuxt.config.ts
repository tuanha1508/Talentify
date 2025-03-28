// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],

  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

  // Tailwind configuration using the module options pattern
  // @ts-ignore - Type declaration issue with Tailwind module
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
  },

  // Nitro configuration for Vercel deployment
  nitro: {
    preset: 'vercel',
    serveStatic: true
  },

  app: {
    head: {
      title: 'Vortexify',
      meta: [
        { name: 'description', content: 'A futuristic HR management and job seeker platform' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg' }
      ]
    }
  },

  // TypeScript configuration
  typescript: {
    strict: true,
    shim: false
  },

  // Vue configuration
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes('-')
    }
  },

  // Vite configuration
  vite: {
    optimizeDeps: {
      include: ['pinia', '@pinia/nuxt', '@tanstack/vue-query']
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'pinia': ['pinia'],
            'vue-query': ['@tanstack/vue-query']
          }
        }
      }
    },
    css: {
      devSourcemap: true
    },
    server: {
      hmr: {
        overlay: true
      }
    }
  },

  compatibilityDate: '2025-03-22'
})