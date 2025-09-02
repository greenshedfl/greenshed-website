import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
// Dynamically set base for GitHub Pages project pages, falling back to '/'
const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1];
const base = process.env.BASE_PATH || (repo ? `/${repo}/` : '/');

export default defineConfig({
  base,
  plugins: [react(), svgr()],
});
