<script setup>
import WatchHeader from "@/components/WatchHeader.vue";
import WatchFoter from "@/components/WatchFoter.vue";

import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <el-container>
    <h2>
      <img src="@/assets/img/avatar.png" style="width: 40px" />
      {{ store.getters.title }} WatchList
    </h2>

    <el-header>
      <WatchHeader :isLogin="store.state.token ? true : false" />
    </el-header>
    <el-main>
      <router-view />
    </el-main>

    <el-footer>
      <watch-foter />
    </el-footer>
  </el-container>
</template>

<style scoped>
.el-footer {
  color: #888;
  margin-top: 15px;
  text-align: center;
  padding: 10px;
}
.el-header {
  height: 32px;
  background-color: black;
  line-height: 32px;
  text-align: center;
  padding: 0 !important;
}

.el-main {
  padding: 0 3px 0 3px !important;
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
</style>
