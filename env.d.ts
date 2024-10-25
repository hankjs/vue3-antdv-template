/// <reference types="vite/client" />
/**
 * 环境变量
 */
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string // 系统名称
  readonly VITE_API_URL: string // 应用根url
  readonly VITE_ENABLE_MOCK: '' | '1' // 是否启用mock
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
