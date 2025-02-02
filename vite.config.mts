import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
// @ts-ignore
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  define: {
    'process.env': process.env,
    global: 'globalThis',
  },
  plugins: [tsconfigPaths(), react(), tailwindcss()],
  server: {
    port: 3000,
  },
});
