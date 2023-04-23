import { defineConfig } from 'unocss'
import { presetWebFonts } from 'unocss'
import { presetUno } from 'unocss'
import { presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
        poppins: 'Poppins',
      },
    }),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
})
