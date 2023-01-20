import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

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
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
