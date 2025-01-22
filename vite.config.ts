import { sveltekit } from "@sveltejs/kit/vite";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				api: "modern-compiler",
				additionalData: `@use "$styles" as *;`
			}
		}
	},
	resolve: {
		alias: {
			$styles: path.resolve(__dirname, "./src/styles")
		}
	}
});
