import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store';
import 'styles/resets.css';
import 'styles/border.css';
import 'styles/common.scss';
import 'js/fastclick.js';
import 'js/common.js';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
