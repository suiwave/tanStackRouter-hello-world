// Vitestの型を追加する
/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react()
  ],
  test: {
    // テストに関するAPIをグローバルに設定
    globals: true,
    // "jsdom" はブラウザ環境を模倣し、DOM操作やブラウザ関連のAPIが使用できるようにします。
    environment: "jsdom",
  },
})
