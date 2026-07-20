import { defineCollection } from "astro:content";

import { wpPostsLoader } from "./lib/wordpress/loaders";
import { postSchema } from "./lib/wordpress/schemas";

export const collections = {
  posts: defineCollection({
    loader: wpPostsLoader(),
    schema: postSchema,
  }),
};
