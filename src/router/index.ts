import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Activities from "../views/Activities.vue";
import Activity from "../views/Activity.vue";
import Chart from "../views/Chart.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/activities",
    name: "Activities",
    component: Activities,
  },
  {
    path: "/activities/:id",
    component: Activity,
  },
  {
    path: "/chart",
    component: Chart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
