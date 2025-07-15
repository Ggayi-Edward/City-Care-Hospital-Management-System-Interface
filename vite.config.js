// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This is the key! It makes Vite listen on all network interfaces.
    port: 5173, // Optional: You can specify a port if you prefer, default is 5173
    // open: true, // Optional: Opens the app in your default browser on start
  },
});