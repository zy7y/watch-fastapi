import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/list.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login.vue"),
    meta: {
      isLogin: false, // 是否要登录才展示 导航
      isNav: true, // 是否是导航栏
    },
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/views/settings.vue"),
    meta: {
      isLogin: true,
      isNav: true,
    },
  },
  {
    path: "/logout",
    name: "Logout",
    meta: {
      isLogin: true,
      isNav: true,
    },
  },
  {
    path: "/movie/edit/:id",
    name: "edit",
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
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

// 导航守卫, 没登录跳转登录页
router.beforeEach((to) => {
  if (to.path === "/") return true;
  if (to.path !== "/login") {
    if (!window.localStorage.getItem("token")) {
      return "/login";
    }
  }
});
export default router;
