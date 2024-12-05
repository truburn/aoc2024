import { defineConfig } from "vitest/config";
import { fileURLToPath } from "url";
import { Alias } from "vite";

function createAlias(folderName: string, parentFolder?: string): Alias {
  const folders = [];
  if (parentFolder) folders.push(parentFolder);
  folders.push(folderName);
  return {
    find: `@${folderName}`,
    replacement: fileURLToPath(
      new URL(`./src/${folders.join("/")}`, import.meta.url)
    ),
  };
}

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./src/utils/test.ts",
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "json"],
      exclude: [
        "&&/.*",
        "**/*.d.ts",
        "**/*.spec.*",
        "**/*.styles.ts",
        "**/*.stories.tsx",
        "**/index.ts",
        "**/*.storyBlock.tsx",
        "src/styles/theme.ts",
        "src/styles/GlobalStyles.tsx",
        "src/main.tsx",
        "node_modules",
      ],
      include: ["src/**"],
    },
    reporters: process.env.GITHUB_ACTIONS ? ["dot", "github-actions"] : ["dot"],
    alias: [
      createAlias("assets"),
      createAlias("constants"),
      createAlias("form", "components"),
      createAlias("layout", "components"),
      createAlias("navigation", "components"),
      createAlias("typography", "components"),
      createAlias("components"),
      createAlias("pages"),
      createAlias("styles"),
      createAlias("utils"),
    ],
  },
});
