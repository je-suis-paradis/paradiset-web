import { defineCollection, z } from "astro:content";

const essays = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.date(),
        draft: z.boolean().default(false),
    }),
});

const notes = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string().optional(),
        publishDate: z.date(),
        type: z.enum(['text', 'image', 'link', 'quote']),
    }),
});

const work = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        featured: z.boolean().default(false),
    }),
});

export const collections = {
    essays,
    notes,
    work,
};