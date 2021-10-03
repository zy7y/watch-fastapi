<script setup>

</script>

<template>
    <el-container>
      <h2>
        <img src="@/assets/img/avatar.png" style="width: 40px;">
        FastAPI WatchList Project
      </h2>
      <el-header>
        <el-menu
    :default-active="activeIndex2"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">Home</el-menu-item>
    <el-menu-item index="2">Login</el-menu-item>
  </el-menu>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
</template>

<style scoped>
.el-header, .el-menu {
  height: 32px;
  background-color: black;
  line-height: 32px;
  text-align: center;
}
.el-menu-item {
  height: 32px !important;
  /*border: none !important;*/
  color: white;
}
.el-menu {
  height: 32px;
  border: none !important;
}
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>