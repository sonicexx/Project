import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // proxy: {
    //   '/v1': {
    //     target: 'https://api.openai.com',
    //     changeOrigin: true,
    //   },
    // },
    host: '192.168.1.100',
  },
});
