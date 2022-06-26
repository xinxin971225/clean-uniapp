/* eslint-disable @typescript-eslint/no-var-requires */
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'
// 假如要加载一些 commonjs 模块，需要引入这个插件，很多地图的sdk都是 commonjs，假如引用报错需要引入它并添加到 `plugins` 里
// import commonjs from "@rollup/plugin-commonjs";
import vwt from 'weapp-tailwindcss-webpack-plugin/vite'
import postcssWeappTailwindcssRename from 'weapp-tailwindcss-webpack-plugin/postcss'

const postcssPlugins = [require('autoprefixer')(), require('tailwindcss')()]

const plugins = [uni()]

const isH5 = process.env.UNI_PLATFORM === 'h5'

if (!isH5) {
  postcssPlugins.push(
    require('postcss-rem-to-responsive-pixel')({
      rootValue: 32,
      propList: ['*'],
      transformUnit: 'rpx'
    })
  )
  postcssPlugins.push(postcssWeappTailwindcssRename())

  plugins.push(vwt())
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      '@/': resolve(__dirname, 'src/')
    }
  },
  // 假如 postcss.config.js 不起作用，请使用内联 postcss
  css: {
    postcss: {
      plugins: postcssPlugins
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      }
    }
  },
  define: {
    // vitest 的源码内联测试 构建时删除 https://cn.vitest.dev/guide/in-source.html#%E6%8C%87%E5%BC%95
    'import.meta.vitest': 'undefined'
  },
  test: {
    globals: true,
    includeSource: ['src/**/*.{js,ts}'],
    setupFiles: ['test/globalSetup/jsdom.ts']
  }
})
