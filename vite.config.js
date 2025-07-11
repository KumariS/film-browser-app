// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // add global styles or variables if needed
        // additionalData: `@use "./src/styles/variables" as *;`
      }
    }
  }
});
