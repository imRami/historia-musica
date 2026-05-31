import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'y6hoafve', // Tu ID único de Sanity
  dataset: 'production',
  useCdn: true, // Cambiado a true para que la API sea pública y accesible desde Vercel sin tokens
  apiVersion: '2024-03-12', 
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (!source) return '';
  return builder.image(source).url();
}
