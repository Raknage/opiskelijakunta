import { file } from "astro/loaders";
import { defineCollection } from "astro:content";

import { partnersSchema, peopleSchema } from "./lib/schemas";
import { wpPostsLoader } from "./lib/wordpress/loaders";
import { postSchema } from "./lib/wordpress/schemas";

export const collections = {
  posts: defineCollection({
    loader: wpPostsLoader(),
    schema: postSchema,
  }),
  people: defineCollection({
    loader: file("src/content/people.yml"),
    schema: peopleSchema,
  }),
  partners: defineCollection({
    loader: file("src/content/kumppanit.yml"),
    schema: partnersSchema,
  }),
};
