import { ALL_PAGES_QUERY, ALL_POSTS_QUERY, MENU_QUERY } from "./queries";

const apiUrl = import.meta.env.WPGRAPHQL_URL;

export async function fetchAPI(query: string, variables = {}) {
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`WordPress API error: ${res.status}`);
  }

  const { data, errors } = await res.json();

  if (errors) {
    throw new Error(`GraphQL Error: ${errors[0].message}`);
  }

  return data;
}

export async function getPrimaryMenu(limit: number = 100) {
  const data = await fetchAPI(MENU_QUERY, { limit: limit });
  return data?.menuItems?.edges[0];
}

export async function getPages() {
  const data = await fetchAPI(ALL_PAGES_QUERY);
  return data?.pages?.edges[0];
}

export async function getPosts(first: number = 100) {
  const data = await fetchAPI(ALL_POSTS_QUERY, { first: first });
  return data?.posts?.nodes[0];
}
