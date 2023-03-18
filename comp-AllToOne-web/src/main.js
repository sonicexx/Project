import { createApp } from 'vue';
import App from './App';
import router from './router'; //路由配置
import store from './store'; //vuex 配置
import 'styles/resets.css';
import 'styles/border.css';
import 'styles/common.scss';
import 'styles/iconfont.css';
import 'js/common.js';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
