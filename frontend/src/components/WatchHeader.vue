<script setup>
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
import { ref } from "vue";

defineProps({
  isLogin: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const store = useStore();

const router = useRouter();
// 获取到当前项目的所有前端路由
const currentRouters = router.getRoutes();

// 当前路由对象
const routes = useRoute();

// 菜单点击事件
const handleSelect = (index) => {
  if (index === "/logout") {
    window.localStorage.clear();
    store.commit("changeToken", false);
    ElMessage({
      message: "退出登录.",
      type: "success",
    });
    router.push("/");
  }
};
</script>

<template>
  <el-menu
    :default-active="routes.path"
    mode="horizontal"
    router
    @select="handleSelect"
  >
    <el-menu-item index="/">Home</el-menu-item>
    <template v-for="router in currentRouters">
      <template v-if="!isLogin && !router.meta.isLogin && router.meta.isNav">
        <el-menu-item :index="router.path">{{ router.name }}</el-menu-item>
      </template>
      <template v-else-if="isLogin && router.meta.isLogin && router.meta.isNav">
        <el-menu-item :index="router.path">{{ router.name }}</el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<style scoped>
.el-menu {
  height: 32px;
  background-color: black;
  line-height: 32px;
  text-align: center;
  padding: 0 !important;
}
.el-menu-item {
  height: 32px !important;
  color: white;
  padding: 8px 12px !important;
}
.el-menu {
  height: 32px;
  border: none !important;
}
</style>
