import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Pages from "vite-plugin-pages"
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import svgSpritePlugin from 'vite-plugin-svg-sprite-component'
import fs from 'fs'

const getFileNames = (dir: string) => fs.readdirSync(dir)
  .map(file => {
    return file.split('.ts')[0]
  })

const COMPOSABLE_PATH = './src/composables'
const STORE_PATH = './src/store'

export function getDirectoryAuthImportPaths(dir: string): Record<string, string> {
  return getFileNames(dir).reduce((acc, name) => ({
    ...acc,
    [name]: `${dir}/${name}`,
  }), {})
}

const composablePaths = getDirectoryAuthImportPaths(COMPOSABLE_PATH)
const storePaths = getDirectoryAuthImportPaths(STORE_PATH)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      dts: 'src/types/shims/auto-imports.d.ts',
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          ...Object.keys(composablePaths).reduce((acc, name) => ({
            ...acc,
            [composablePaths[name].replace('./src/', '@/')]: [
              ['default', name],
            ],
          }), {}),
          ...Object.keys(storePaths).reduce((acc, name) => {
            const hookName = `use${name[0].toUpperCase()}${name.substring(1)}`
            return {
              ...acc,
              [storePaths[name].replace('./src/', '@/')]: [
                [hookName, hookName],
              ],
            }
          }, {}),
        }
      ],
    }),
    vue(),
    Pages({
      pagesDir: 'src/pages',
    }),
    Components({
      dts: 'src/types/shims/components.d.ts',
      dirs: [
        'src/components',
        'src/pages',
      ],
      resolvers: [
        HeadlessUiResolver({}),
        (name) => {
          if (name.includes('IconSolid')) {
            const realName = name.split('Solid')[0]
            return { importName: 'default', path: `@heroicons/vue/solid/esm/${realName}.js` }
          }
          if (name.includes('IconOutline')) {
            const realName = name.split('Outline')[0]
            return { importName: 'default', path: `@heroicons/vue/outline/esm/${realName}.js` }
          }
        },
      ],

      include: [/\.vue$/, /\.vue\?vue/],
      extensions: ['vue'],
    }),
    svgSpritePlugin({
      symbolId: name => `svg-${name}`,
      component: {
        type: 'vue',
        defaultExport: true,
      },
    }),
    Layouts({
      defaultLayout: 'DefaultLayout'
    }),
  ],
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}/`,
      '~assets': `${path.resolve(__dirname, 'src', 'assets')}/`,
      '~/': `${path.resolve(__dirname, '.')}/`,
    },
  },
})
