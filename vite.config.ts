import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'unicorn-magic-resolver',
      resolveId(id) {
        // Intercept imports to unicorn-magic
        if (id === 'unicorn-magic') {
          return 'virtual:unicorn-magic';
        }
        return null;
      },
      load(id) {
        // Provide a virtual module with the required exports
        if (id === 'virtual:unicorn-magic') {
          return `
            export const toPath = (path) => path.toString();
            export default { toPath };
          `;
        }
        return null;
      }
    }
  ],
  resolve: {
    alias: {
      '@': '/',
      '~': '/'
    }
  },
  optimizeDeps: {
    include: ['pinia', '@pinia/nuxt']
  }
}) 