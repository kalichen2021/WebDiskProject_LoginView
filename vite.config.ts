import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from "path"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// const webpack = require('webpack')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      // dts: "/auto-import.d.ts",
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      // dts: './components.d.ts',
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // build: {
    
  //   target: "modules",//浏览器兼容性  "esnext"|"modules"
    
  //   polyfillModulePreload: true,//否自动注入 module preload 的 polyfill
    
  //   outDir: "dist",//输出路径
    
  //   assetsDir: "static",//生成静态资源的存放路径
    
  //   assetsInlineLimit: 4096,//小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
    
  //   cssCodeSplit: true,//启用/禁用 CSS 代码拆分
    
  //   cssTarget: "",//不同的浏览器target设置CSS的压缩
    
  //   //boolean | 'inline' | 'hidden'
  //   sourcemap: false,//构建后是否生成 source map 文件
    
  //   // rollupOptions: {//自定义底层的 Rollup 打包配置
      
  //   //   input: "src/main.ts",//要打包的文件路径

  //   //   //文件输出位置
  //   //   output: {
        
  //   //     file: "dist/index.js",//打包生产文件路径
       
  //   //     // "amd", "cjs", "system", "es", "iife" or "umd
  //   //     format: "cjs", //打包输出格式
        
  //   //     name: "bundleName",//包的全部变量名称
        
  //   //     globals: {//声明全局变量
  //   //       jquery: "$",
  //   //     },
  //   //   },
      
  //   //   plugins: [],//插件
      
  //   //   external: ["lodash"],//不需打包的文件
  //   // },
  // }
  build: {
    manifest: false,
    outDir: 'dist/',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // 重点在这里哦
        // entryFileNames: `assets/[name].${timestamp}.js`,
        // chunkFileNames: `assets/[name].${timestamp}.js`,
        // assetFileNames: `assets/[name].${timestamp}.[ext]`
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      }
    }
  },
})
