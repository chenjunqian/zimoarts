import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
})

createApp(App).use(Antd).use(router).mount('#app')
