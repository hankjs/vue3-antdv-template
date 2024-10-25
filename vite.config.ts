import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { createHtmlPlugin } from 'vite-plugin-html'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          title: process.env.VITE_APP_TITLE
        }
      }
    }),
    vue(),
    vueJsx(),
    Unocss(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
        })
      ]
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(__dirname, 'src/assets/svgIcons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'text-color': '#333333',
          'primary-color': '#5392f7',
          'primary-5': '#75A8F9',
          'border-radius-base': '4px',
          'box-shadow-base': '0 2px 0 rgba(0, 0, 0, 0.045)',
          'input-height-base': '28px',
          'border-color-base': '#BDC9CD',
          'btn-primary-shadow': '0 2px 0 rgba(0, 0, 0, 0.045)',
          'btn-text-shadow': '0 -1px 0 rgba(0, 0, 0, 0.12)',
          'table-padding-vertical': '11px',
          'table-padding-horizontal': '8px',
          'table-header-color': '#333333',
          'table-header-bg': '#F8F8F8'
        },
        javascriptEnabled: true
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          echarts: ['echarts'],
          tinymce: ['tinymce']
        }
      }
    }
  },
  server: {
    // proxy: {
    //   '/api': {
    //     target: process.env.VITE_API_URL,
    //     changeOrigin: true
    //   }
    // }
  }
})
