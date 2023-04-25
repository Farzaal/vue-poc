import { createRouter, createWebHistory } from "vue-router";
import Antd from '../views/Antd.vue'
import Vuetify from '../views/Vuetify.vue'
import Bootstrap from '../views/Bootstrap.vue'
import Chakra from '../views/Chakra.vue'

interface Route {
  path: string;
  name: string;
  component: any;
}

const routes: Route[] = [
  {
    path: "/",
    name: "Antd",
    component: Antd,
  },
  {
    path: "/Vuetify",
    name: "Vuetify",
    component: Vuetify,
  },
  {
    path: "/bootstrap",
    name: "Bootstrap",
    component: Bootstrap,
  },
  {
    path: "/chakra",
    name: "Chakra",
    component: Chakra,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
