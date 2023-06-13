import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import Antd from 'ant-design-vue';

import './assets/styles/styles.scss';



createApp(App)
    .use(Antd)
    .use(router)
    .use(createPinia())
    .mount('#app')
