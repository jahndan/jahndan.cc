import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";
import type { SchemaContext } from "astro:content";

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.toml', base: "./projects" }),
  schema: ({ image }: SchemaContext) => z.object({
    title: z.string(),
    priority: z.number(),
    demo: z.object({
      img: image(),
      title: z.string().optional(),
      alt: z.string(),
    }),
    description: z.string(),
  })
});

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./posts" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
  })
});

export const collections = { projects, posts };
