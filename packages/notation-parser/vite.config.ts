import { resolve } from 'node:path';

import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@generated': resolve(__dirname, 'generated'),
        },
    },

    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            fileName: 'tekken-parser',
            formats: ['cjs', 'es'],
        },
    },
});
