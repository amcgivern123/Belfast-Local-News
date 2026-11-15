import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_SLUGS } from './lib/site';

// One Markdown file per article in src/content/articles
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),            // standfirst + Google description
    date: z.coerce.date(),
    category: z.enum(CATEGORY_SLUGS),
    area: z.string().optional(),        // e.g. "Lisburn Road"
    author: z.string().default('Belfast Local Business'),
    image: z.string().optional(),       // e.g. /images/shopfront.jpg
    imageAlt: z.string().optional(),
    pinned: z.boolean().default(false), // keeps it as the homepage lead story
    draft: z.boolean().default(false),
  }),
});

// One file per offer in src/content/offers
const offers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/offers' }),
  schema: z.object({
    business: z.string(),
    offer: z.string(),
    area: z.string().optional(),
    ends: z.coerce.date(),
    link: z.string().optional(),
    details: z.string().optional(),
  }),
});

export const collections = { articles, offers };
