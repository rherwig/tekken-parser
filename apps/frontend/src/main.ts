import { createApp } from 'vue';
import { createPinia } from 'pinia';

import '@/assets/scss/main.scss';

import App from '@/app.vue';
import router from '@/router';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app');
