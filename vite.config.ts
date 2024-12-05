import { Alias, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { fileURLToPath } from "url";

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

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [react(), svgr()],
  resolve: {
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
