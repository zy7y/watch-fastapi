import { createApp } from "vue";
import App from "./App.vue";

// 导入重置样式css文件
import "normalize.css";
import "@/assets/css/base.css";

import router from "@/router";

const app = createApp(App);
app.use(router);
app.mount("#app");
