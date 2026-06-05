import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const podcasts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/podcasts' }),
  schema: z.object({
    title: z.string(),
    school: z.string(),
    date: z.coerce.date(),
    subject: z.enum(['Ciencias', 'Historia', 'Lengua', 'Entrevistas', 'Matemáticas', 'Cultura Canaria', 'Medio Ambiente', 'Valores Cívicos']),
    level: z.enum(['1º Primaria', '2º Primaria', '3º Primaria', '4º Primaria', '5º Primaria', '6º Primaria']),
    duration: z.string(),
    audioFile: z.string().optional(),
    coverImage: z.string().optional(),
    description: z.string(),
    objectives: z.array(z.string()).optional(),
    competencies: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    episodeOrder: z.number().min(1).optional(),
    efemeride: z.string().optional(),
  }),
});

export const collections = { podcasts };
