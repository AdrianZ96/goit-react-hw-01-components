import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/goit-react-hw-01-components/',
  plugins: [react()],
  build: {
    outDir: 'docs',      // Wszystko wyląduje w folderze `docs`
    assetsDir: 'assets', // Assety w `docs/assets/`
    emptyOutDir: true    // Na czysto przed każdym buildem
  }
});
