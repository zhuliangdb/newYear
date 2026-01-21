import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import { viteSingleFile } from 'vite-plugin-singlefile';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
import { copyFileSync } from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'copy-404-html',
      writeBundle() {
        // 构建完成后复制404.html到dist目录
        copyFileSync('404.html', 'dist/404.html');
      }
    },
    // 资源压缩插件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240, // 10kb以上压缩
      algorithm: 'gzip',
      ext: '.gz'
    }),
    // 打包分析
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: '新年惊喜',
        short_name: '新年惊喜',
        description: '致我的互联网搭子 - 2026新年快乐',
        theme_color: '#6e48aa',
        start_url: '/newYear/'
      },
      workbox: {
        // 配置缓存策略
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.+\.(png|jpg|jpeg|svg|gif|webp)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
              }
            }
          },
          {
            urlPattern: /^https:\/\/.+\.(woff|woff2|ttf|eot)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'fonts',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 365 * 24 * 60 * 60 // 1 year
              }
            }
          },
          {
            urlPattern: /^https:\/\/api\./i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 // 1 hour
              }
            }
          }
        ]
      },
      // 开发模式下启用PWA功能
      devOptions: {
        enabled: true,
        type: 'module'
      }
    })
  ],
  base: '/newYear/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  },
  build: {
    // 优化构建输出
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // 分割代码
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router'],
          'howler': ['howler']
        }
      }
    },
    // 启用CSS拆分
    cssCodeSplit: true,
    // 生成sourcemap（可选，生产环境可关闭）
    sourcemap: false
  },
  // 优化CSS
  css: {
    preprocessorOptions: {
      css: {
        charset: false
      }
    },
    devSourcemap: false
  }
});