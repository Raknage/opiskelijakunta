import type { Loader } from "astro/loaders";

import { getPages, getPosts, getPrimaryMenu } from "./client";

export function wpPostsLoader() {
  return {
    name: "WPPosts",
    load: async (ctx) => {
      ctx.logger.label = "Wordpress Posts";
      ctx.logger.info("Getting posts");

      const postData = await getPosts();

      ctx.store.clear();
      ctx.logger.info("DataStore cleared");

      for (const post of postData) {
        const id = post.id;
        const data = await ctx.parseData({
          id,
          data: post,
        });
        ctx.logger.info(`Post "${post.slug}" parsed`);

        ctx.store.set({
          id,
          data,
          digest: ctx.generateDigest(data),
        });
      }
    },
  } satisfies Loader;
}

export function wpPagesLoader() {
  return {
    name: "WPPages",
    load: async (ctx) => {
      ctx.logger.label = "Wordpress Pages";
      ctx.logger.info("Getting pages");

      const pageData = await getPages();

      ctx.store.clear();
      ctx.logger.info("DataStore cleared");

      for (const page of pageData) {
        const id = page.node.id;
        const data = await ctx.parseData({
          id,
          data: page,
        });
        ctx.logger.info(`Page "${page.node.slug}" parsed`);

        ctx.store.set({
          id,
          data,
          digest: ctx.generateDigest(data),
        });
      }
    },
  } satisfies Loader;
}

export function wpMenuLoader() {
  return {
    name: "WPMenu",
    load: async (ctx) => {
      ctx.logger.label = "Wordpress Menu";
      ctx.logger.info("Getting menu");

      const menuData = await getPrimaryMenu();

      ctx.store.clear();
      ctx.logger.info("DataStore cleared");

      for (const menu of menuData) {
        const id = menu.node.id;
        const data = await ctx.parseData({
          id,
          data: menu,
        });
        ctx.logger.info(`Menu "${menu.node.label}" parsed`);

        ctx.store.set({
          id,
          data,
          digest: ctx.generateDigest(data),
        });
      }
    },
  } satisfies Loader;
}
