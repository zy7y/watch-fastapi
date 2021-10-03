import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/list.vue"),
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/settings",
    component: () => import("@/views/settings.vue"),
  },
  {
    path: "/edit/:id",
    props: true,
    component: () => import("@/views/edit.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/not-fount.vue"),
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
