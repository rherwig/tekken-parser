import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        name: 'index',
        path: '/',
        component: () => import('../views/index.vue'),
    },
    {
        name: 'share',
        path: '/share',
        component: () => import('../views/share.vue'),
    },
    {
        name: 'characters',
        path: '/characters',
        component: () => import('../views/characters/index.vue'),
    },
    {
        name: 'character-details',
        path: '/characters/:slug',
        component: () => import('../views/characters/details.vue'),
    },
];

export default createRouter({
    history: createWebHashHistory(),
    routes,
});
