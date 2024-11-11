import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import remix from '@remix-run/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), remix()],
});