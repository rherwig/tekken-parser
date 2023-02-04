import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueFire, VueFireAuth } from 'vuefire';

import '@/assets/scss/main.scss';

import App from '@/app.vue';
import router from '@/router';
import { useFirestoreHelper } from '@/firebase';

const { firebaseApp } = useFirestoreHelper();

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()],
});

app.mount('#app');
