import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import tailwindcss from "tailwindcss";
export default defineConfig({
    base: "./",
    // fixes style_default not found issue related to MUI
    optimizeDeps: {
        include: ['@mui/material/Tooltip'],
    },
    server: {
        watch: {
            usePolling: true,
        },
        host: true, // for the Docker Container port mapping to work
        strictPort: true,
        port: 3001,
    },
    preview: {
        port: 5000,
    },
    plugins: [
        react({
            jsxRuntime: "automatic",
        }),
    ],
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
    },
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    build: {
        outDir: 'dist',
    },
});
