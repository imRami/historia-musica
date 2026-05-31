import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { sanity } from 'astro-sanity'; // <-- Corregido acá

export default defineConfig({
  output: 'server',
  adapter: vercel(),
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
