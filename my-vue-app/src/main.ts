import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import './assets/font.css';

const vueApp = createApp(App);
vueApp.use(Antd)
vueApp.mount('#app')
