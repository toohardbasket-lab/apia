// @ts-check
import { defineConfig } from "astro/config";

// Static output. No adapter, no server, no runtime: the whole site is files.
// That is the point — it is what makes this deployable to Cloudflare Pages with
// nothing to exploit and nothing to patch.
export default defineConfig({
  site: "https://apia.org.au",
  trailingSlash: "always",
});
