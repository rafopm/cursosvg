// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/cursosvg/',
  site: 'https://rafopm.github.io/cursosvg/',
  output: 'static', 
  
  integrations: [tailwind()]
});