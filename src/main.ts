import { createApp } from "vue";
import App from "./App.vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import Chakra from '@chakra-ui/vue';
// import '@chakra-ui/vue/dist/chakra.min.css';

import router from "./router";

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App);

app.use(router).use(Antd).use(vuetify).use(Chakra).mount("#app");