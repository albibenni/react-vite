import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    svgr(),
    eslintPlugin({}),
    checker({
      typescript: true,
    }),
  ],
});
