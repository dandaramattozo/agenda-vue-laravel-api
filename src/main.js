import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import store from './store';
import 'vee-validate';
import './plugins/axios';

import './assets/css/tailwind.css';


createApp(App).use(store).use(router).mount('#app');

