import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import * as path from 'node:path';


export default defineConfig({
  plugins: [
    devtools(),
    solidPlugin({
      babel: {

      }
    }),
  ],
  resolve: {
    alias: {
      '#': path.resolve(__dirname, 'src'),
    },

  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
