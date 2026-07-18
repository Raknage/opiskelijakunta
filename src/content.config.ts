import { defineCollection } from "astro:content";

import { wpPostsLoader, wpPagesLoader, wpMenuLoader } from "./lib/wordpress/loaders";
import { postSchema, pageSchema, menuSchema } from "./lib/wordpress/schemas";

export const collections = {
  posts: defineCollection({
    loader: wpPostsLoader(),
    schema: postSchema,
  }),
  pages: defineCollection({
    loader: wpPagesLoader(),
    schema: pageSchema,
  }),
  menus: defineCollection({
    loader: wpMenuLoader(),
    schema: menuSchema,
  }),
};
