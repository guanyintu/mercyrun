import { createApp } from 'vue'
import App from './App.vue'

import native from 'naive-ui';

import createDemoRouter, {routes} from "./router";


const app=createApp(App);
const route=createDemoRouter(app,routes)
app.use(native)
    .use(route)
    .mount('#app')
