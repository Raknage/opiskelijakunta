import { z } from "astro/zod";

export const postSchema = z.object({
  id: z.string(),
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

export const postFetchSchema = z.object({
  posts: z.object({
    nodes: z.array(postSchema),
  }),
});

export const pageSchema = z.object({
  node: z.object({
    id: z.string(),
    title: z.string(),
    status: z.string(),
    slug: z.string(),
    isFrontPage: z.boolean(),
    content: z.string(),
  }),
});

export const pageFetchSchema = z.object({
  pages: z.object({
    edges: z.array(pageSchema),
  }),
});

export const menuSchema = z.object({
  node: z.object({
    id: z.string(),
    databaseId: z.number(),
    label: z.string(),
    uri: z.string(),
    order: z.number(),
    parentId: z.string().nullable(),
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

export const menuFetchSchema = z.object({
  menuItems: z.object({
    edges: z.array(menuSchema),
  }),
});

export type WPPost = z.infer<typeof postSchema>;
export type WPFetchedPosts = z.infer<typeof postFetchSchema>;
export type WPPage = z.infer<typeof pageSchema>;
export type WPFetchedPages = z.infer<typeof pageFetchSchema>;
export type WPMenu = z.infer<typeof menuSchema>;
export type WPFetchedMenus = z.infer<typeof menuFetchSchema>;
