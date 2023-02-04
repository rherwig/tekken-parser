import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { getCurrentUser } from 'vuefire';

const routes: RouteRecordRaw[] = [
    {
        name: 'index',
        path: '/',
        component: () => import('../views/index.vue'),
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('../views/login.vue'),
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
        path: '/characters/:id',
        component: () => import('../views/characters/details.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach(async (to) => {
    // routes with `meta: { requiresAuth: true }` will check for the users, others won't
    const currentUser = await getCurrentUser();

    if (to.meta.requiresAuth && !currentUser) {
        return {
            path: '/login',
            query: {
                redirectTo: to.fullPath,
            },
        };
    }
});

export default router;
