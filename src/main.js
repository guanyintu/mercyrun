import { createApp } from 'vue'
import App from './App.vue'
import {
    // create naive ui
    create, NBackTop,
    // component
    NButton,
    NButtonGroup,
    NCard,
    NGrid, NGridItem,
    NH1,
    NLayout, NLayoutHeader, NLayoutSider,
    NLoadingBarProvider,
    NMenu,
    NMessageProvider,
    NRate, NSpace,
    NTag,
    NText,
    NThing
} from 'naive-ui'


import createDemoRouter, {routes} from "./router";
import axios from "axios";
const naive = create({
    components: [NButton,NMessageProvider,NLoadingBarProvider,NLayout,NMenu,NButtonGroup,NH1,
        NText,NCard,NThing,NGrid,NTag,NRate,NSpace,NLayoutSider,NLayoutHeader,NBackTop, NGridItem ]
})

const app=createApp(App);
const route=createDemoRouter(app,routes)
app.use(naive)
    .use(route)
    .mount('#app')

app.config.globalProperties.$http=axios;
