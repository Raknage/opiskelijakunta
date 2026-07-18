export type Posts = {
  data: {
    posts: {
      nodes: Array<{
        id: string;
        slug: string;
        title: string;
        date: string | Date;
        content: string;
        featuredImage: {
          node:
            | {
                filePath: string;
                guid: string;
                slug: string;
                title: string;
              }
            | undefined
            | null;
        };
      }>;
    };
  };
};

export type Pages = {
  data: {
    pages: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          status: string;
          slug: string;
          isFrontPage: boolean;
          content: string;
        };
      }>;
    };
  };
};

export type Menus = {
  data: {
    menuItems: {
      edges: Array<{
        node: {
          id: string;
          databaseId: number;
          label: string;
          uri: string;
          order: number;
          parentId?: string;
          parentDatabaseId: number;
          childItems: {
            edges: Array<{
              node: {
                id: string;
                databaseId: number;
                label: string;
                uri: string;
                order: number;
                parentId: string;
                parentDatabaseId: number;
              };
            }>;
          };
        };
      }>;
    };
  };
};
