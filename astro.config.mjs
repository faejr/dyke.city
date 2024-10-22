import { defineConfig } from "astro/config";
import node from "@astrojs/node";
const { PORT } = process.env;

// https://astro.build/config
export default defineConfig({
  output: "server",
  server: {
    port: Number(PORT) || 4321,
    host: true,
  },
  adapter: node({
    mode: "standalone",
  }),
});
