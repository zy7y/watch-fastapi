import { createApp } from "vue";
import App from "./App.vue";

// 导入重置样式css文件
import "normalize.css";
import "@/assets/css/base.css";
import "element-plus/theme-chalk/el-message.css";

import router from "@/router";
import store from "@/store";

// 每次启动时 加载浏览器缓存到vuex中
store.dispatch("loadLocalStorage");

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
