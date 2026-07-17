import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnv } from "vite-plus";

const env = loadEnv("", process.cwd(), "");
const url = env.WPGRAPHQL_URL;

if (!url) {
  throw new Error("Missing env variable");
}

const config: CodegenConfig = {
  schema: url,
  generates: {
    "src/lib/wordpress/types.ts": {
      plugins: ["typescript"],
    },
  },
};

export default config;

// To load types from WP go to WPGraphQL settings and Enable Public Introspection
// Then run: `pnpm graphql-codegen`
