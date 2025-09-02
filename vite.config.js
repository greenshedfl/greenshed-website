import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
// Use relative paths in production so assets work on both GH Pages (project pages) and custom domains.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? './' : '/',
  plugins: [react(), svgr()],
}));
