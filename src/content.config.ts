import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**.md", base: "posts/" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    preface: z.string(),
  }),
});

export const collections = { blog };
