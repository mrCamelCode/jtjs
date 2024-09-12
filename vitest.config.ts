import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    typecheck: {
      tsconfig: './tsconfig.base.json',
    },
    environment: 'happy-dom',
  },
  // resolve: {
  //   alias: {
  //     '@jtjs/browser/*': './libs/browser/src/*',
  //   },
  // },
});
