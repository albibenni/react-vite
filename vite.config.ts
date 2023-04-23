import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteSvgr from "vite-plugin-svgr";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [react(), viteSvgr(), checker({
    typescript: true
  })],
})
