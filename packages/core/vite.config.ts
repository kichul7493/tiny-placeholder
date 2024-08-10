import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import istanbul from 'vite-plugin-istanbul'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    istanbul({
      cypress: true,
      requireEnv: false,
      exclude: ['cypress/**/*'],
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'core',
    },
    sourcemap: true,
  },
})
