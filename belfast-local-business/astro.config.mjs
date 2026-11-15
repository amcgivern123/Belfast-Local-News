import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://belfastlocalbusiness.co.uk',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
