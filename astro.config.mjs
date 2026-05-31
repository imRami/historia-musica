import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { sanity } from 'astro-sanity';

export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: 'y6hoafve', // Tu ID único de Sanity
      dataset: 'production',
      useCdn: false,
      apiVersion: '2024-03-12',
    })
  ]
});
