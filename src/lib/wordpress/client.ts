import { ALL_PAGES_QUERY, ALL_POSTS_QUERY, MENU_QUERY } from "./queries";
import type {
  WPMenu,
  WPPage,
  WPPost,
  WPFetchedPosts,
  WPFetchedPages,
  WPFetchedMenus,
} from "./schemas";

const apiUrl = import.meta.env.WPGRAPHQL_URL;

export async function fetchQuery<T>(
  query: string,
  variables: Record<string, any> = {},
): Promise<T> {
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`WordPress API error: ${res.status}`);
  }

  const { data, errors } = (await res.json()) as { data: T; errors?: any[] };

  if (errors) {
    throw new Error(`GraphQL Error: ${errors[0].message}`);
  }

  return data;
}

export async function getPosts(first: number = 5): Promise<WPPost[]> {
  const data = await fetchQuery<WPFetchedPosts>(ALL_POSTS_QUERY, { first: first });
  return data.posts.nodes;
}

export async function getPages(): Promise<WPPage[]> {
  const data = await fetchQuery<WPFetchedPages>(ALL_PAGES_QUERY);
  return data.pages.edges;
}

export async function getPrimaryMenu(limit: number = 100): Promise<WPMenu[]> {
  const data = await fetchQuery<WPFetchedMenus>(MENU_QUERY, { limit: limit });
  return data.menuItems.edges;
}
