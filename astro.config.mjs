// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://6hr.caffeinatedope.net",
	base: "https://6hr.caffeinatedope.net",
	vite: {
		plugins: [tailwindcss()],
	},
});
