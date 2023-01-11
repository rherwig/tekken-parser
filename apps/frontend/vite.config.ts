import { resolve } from 'node:path';

import type { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default <UserConfig>{
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 4200,
    },
};
