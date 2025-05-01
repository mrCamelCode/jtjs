/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      fileName: 'jtjs_form',
      formats: ['es'],
    },
  },
});
