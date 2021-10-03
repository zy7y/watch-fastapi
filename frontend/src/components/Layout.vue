<script setup>
import { ref } from "vue";
const isLogin = ref(false); // 已登录
</script>

<template>
  <el-container>
    <h2>
      <img src="@/assets/img/avatar.png" style="width: 40px" />
      FastAPI WatchList Project
    </h2>
    <el-header>
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
    </el-header>
    <p>8 totals</p>
    <el-main>
      <ul class="movie-list">
        <li v-for="i in 8">
          Dead Poets Society-1991
          <span class="float-right">
            <a
              class="imdb"
              href="https://www.imdb.com/find?q=Dead Poets Society"
              target="_blank"
            >
              IMDb
            </a>
          </span>
        </li>
      </ul>
      <img src="@/assets/img/totoro.gif" class="dudu" />
    </el-main>
    <el-footer>
      <span
        >© 2021
        <a herf="http://helloflask.com/tutorial/">HelloFlask</a>
        <a
          herf="https://space.bilibili.com/438858333/channel/detail?cid=190225&ctype=0"
        >
          使用FastAPI + Vue3 翻抄 HelloFlask一书中的项目
        </a>
      </span>
    </el-footer>
  </el-container>
</template>

<style scoped>
.el-header,
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
.el-footer {
  color: #888;
  margin-top: 15px;
  text-align: center;
  padding: 10px;
}

.el-main {
  padding: 0 3px 0 3px !important;
}

.movie-list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}
.movie-list li {
  padding: 12px 24px;
  border-bottom: 1px solid #ddd;
}

.imdb {
  font-size: 12px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  background: #f5c518;
  border-radius: 5px;
  padding: 3px 5px;
}

.float-right {
  float: right;
}

.dudu {
  display: block;
  margin: 0 auto;
  height: 100px;
}
</style>
