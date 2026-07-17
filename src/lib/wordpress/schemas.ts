import { z } from "astro/zod";

export const postSchema = z.object({
  slug: z.string(),
  title: z.string(),
  date: z.coerce.date(),
  content: z.string(),
  featuredImage: z
    .object({
      node: z.object({
        filePath: z.string(),
        guid: z.url(),
        slug: z.string(),
        title: z.string(),
      }),
    })
    .nullable()
    .optional(),
});

export const pageSchema = z.object({
  node: z.object({
    title: z.string(),
    status: z.string(),
    slug: z.string(),
    id: z.string(),
    isFrontPage: z.boolean(),
    content: z.string(),
  }),
});

export const menuSchema = z.object({
  node: z.object({
    id: z.string(),
    databaseId: z.number(),
    label: z.string(),
    uri: z.string(),
    order: z.number(),
    parentId: z.null(),
    parentDatabaseId: z.number(),
    childItems: z
      .object({
        edges: z.array(
          z.object({
            node: z.object({
              id: z.string(),
              databaseId: z.number(),
              label: z.string(),
              uri: z.string(),
              order: z.number(),
              parentId: z.string(),
              parentDatabaseId: z.number(),
            }),
          }),
        ),
      })
      .nullable()
      .optional(),
  }),
});
