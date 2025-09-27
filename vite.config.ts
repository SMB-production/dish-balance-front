import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
   plugins: [react()],
   server: {
      proxy: {
         '/api': {
            target: 'http://localhost:5001',
            changeOrigin: true,
            configure: (proxy, options) => {
               proxy.on('proxyReq', (_proxyReq, req) => {
                  console.log(
                     `[PROXY-REQ] ${req.method} ${req.url} -> ${options.target}${req.url}`,
                  );
               });
               proxy.on('proxyRes', (proxyRes, req) => {
                  console.log(
                     `[PROXY-RES] ${req.method} ${req.url} <- ${options.target}${req.url} [${proxyRes.statusCode}]`,
                  );
               });
            },
         },
      },
   },
});
