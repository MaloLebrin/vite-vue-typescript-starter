# Vue 3 - Vite Starter

This is a starter project for [Vue Js](https://vuejs.org/) powered by [Vite](https://vitejs.dev/).

The project is helpful to start your next project, as it provides a lot of the common tools you may reach for, all ready to go.

### Features

- TypeScript Included.
- [Vite Plugin AutoImport](https://github.com/antfu/unplugin-auto-import).
- [Vite Plugin Svg-sprite-component](https://github.com/cereschen/vite-plugin-svg-sprite-component.git).
- [Vue Router](https://router.vuejs.org/) Included Auto Imported.
- [Pinia](https://pinia.vuejs.org/) Included Auto Imported.
- [Tailwindcss](https://tailwindcss.com/) Included.
- [HeadlessUi](https://headlessui.dev/) Included Auto Imported.
- Composables folder Auto Imported

### Directory Structure

| Name                              | Description |
| --------------------------------- | ----------- |
| **dist/**                        | Compiled source files will be placed here. |
| **public/**                       | Static assets (fonts, css, js, img). |
| **src/**                          | Source files. |
| **src/components**                | Vue components including shared (common) components. |
| **src/layouts**                   | Dynamic Layout Components. |
| **src/pages**                     | Views - screen components. |
| **src/routes**                    | Application routes. |
| **src/store**                     | Pinia states management. |
| **src/composables**               | Files to encapsulate and reuse logic.|
| **src/types**                     | Types of all you project.|

### Installation

- Clone the repo - `git clone https://github.com/MaloLebrin/vite-vue-typescript-starter.git`.
- Install project dependencies — `pnpm install`.
- Create `.env` file - `cp .env.example .env`.
- Launch the app — `pnpm run dev`, it will become available at [http://localhost:3000](http://localhost:3000/).

### Available Scripts

- `dev`
- `build`
- `preview`

### License

[MIT](LICENSE).

---