export const ALL_POSTS_QUERY = `
query AllPostsQuery($first: Int) {
  posts(first: $first, where: {status: PUBLISH}) {
    nodes {
      slug
      title
      date
      content(format: RENDERED)
      featuredImage {
        node {
          filePath
          guid
          slug
          title
        }
      }
    }
  }
}
`;

export const ALL_PAGES_QUERY = `
query AllPagesQuery {
  pages(where: {status: PUBLISH}) {
    edges {
      node {
        title
        status
        slug
        id
        isFrontPage
        content(format: RENDERED)
      }
    }
  }
}
`;

export const MENU_QUERY = `
query MenuQuery($limit: Int) {
  menuItems(first: $limit) {
    edges {
      node {
        id
        databaseId
        label
        uri
        order
        parentId
        parentDatabaseId
        childItems {
          edges {
            node {
              id
              databaseId
              label
              uri
              order
              parentId
              parentDatabaseId
            }
          }
        }
      }
    }
  }
}
`;
