/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly WPGRAPHQL_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
