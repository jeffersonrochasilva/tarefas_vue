import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/home/index.vue"),
  },
  {
    path: "/register/:id",
    name: "register",
    component: () => import("../pages/register/index.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
