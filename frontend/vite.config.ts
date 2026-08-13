import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Where to proxy /api during local dev. Defaults to the host backend; the
// Docker Compose frontend service overrides this to reach the backend container.
const proxyTarget = process.env.VITE_PROXY_TARGET ?? 'http://localhost:3001';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: proxyTarget,
        changeOrigin: true,
      },
    },
  },
});
