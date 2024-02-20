import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    id: z.number(),
    title: z.string(),
    cover: image(),
    coverAlt: z.string(),
    caption:z.string()
  }),
});

export const collections = {
  blog: blogCollection,
};