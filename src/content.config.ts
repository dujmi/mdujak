import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**.md", base: "posts/" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.date(),
    description: z.string(),
    tldr: z.array(z.string()).max(4),
  }),
});

export const collections = { blog };
