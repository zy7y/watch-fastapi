<script setup>
defineProps({
  isLogin: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <el-menu :default-active="1" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">Home</el-menu-item>
    <template v-if="!isLogin">
      <el-menu-item index="2">Login</el-menu-item>
    </template>
    <template v-else>
      <el-menu-item index="2">Settings</el-menu-item>
      <el-menu-item index="3">Logout</el-menu-item>
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
