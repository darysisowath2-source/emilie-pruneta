import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://emilie-pruneta.pages.dev',
  vite: { plugins: [tailwindcss()] },
})
