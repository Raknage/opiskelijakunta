import { z } from "astro/zod";

export type PageProps = z.input<typeof pageProps>;
export type PagePropsInput = z.input<typeof pageProps>;
export type PagePropsOutput = z.output<typeof pageProps>;

export const pageProps = z.object({
  title: z.string(),
  navOrder: z.number(),
  visible: z.boolean().default(true),
  submenu: z
    .array(
      z.union([
        z.object({ label: z.string(), id: z.string().startsWith("#") }),
        z.object({ label: z.string(), url: z.url() }),
      ]),
    )
    .default([]),
});
