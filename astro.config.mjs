// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://devver.app",
	integrations: [sitemap()],
	server: {
		port: 5173,
		allowedHosts: ["front.localcan.arekkusu.dev"],
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
