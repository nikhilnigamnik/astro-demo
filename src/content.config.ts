import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const sectionSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("hero"),
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    buttonText: z.string().optional(),
    buttonLink: z.string().optional(),
    bullets: z
      .array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
        }),
      )
      .optional(),
  }),
  z.object({
    type: z.literal("problem"),
    label: z.string().optional(),
    title: z.string(),
    description: z.string(),
  }),
  z.object({
    type: z.literal("solution"),
    label: z.string().optional(),
    title: z.string(),
    description: z.string(),
  }),
  z.object({
    type: z.literal("featureGrid"),
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
  z.object({
    type: z.literal("otherFeatures"),
    label: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    items: z.array(
      z.object({
        label: z.string().optional(),
        title: z.string(),
        description: z.string().optional(),
        banner: z.string().optional(),
        url: z.string().optional(),
        items: z
          .array(
            z.object({
              title: z.string(),
            }),
          )
          .optional(),
      }),
    ),
  }),
]);

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()),
      heroImage: z.string().optional(),
      authorName: z.string().optional(),
      authorImage: z.string().optional(),
      authorDesignation: z.string().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
    }),
});

const features = defineCollection({
  loader: glob({ base: "./src/content/features", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date().optional(),
      heroImage: z.string().optional(),
      buttonLink: z.string().optional(),
      buttonText: z.string().optional(),
      sections: z.array(sectionSchema).optional(),
    }),
});

export const collections = { blog, pages, features };
