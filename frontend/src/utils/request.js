import axios from "axios";
import { ElMessage } from "element-plus";

// 使用 export defalut 就不需要导入时 解包操作 {}
export function request(config) {
  //  创建axios 实例
  const instance = axios.create({
    // baseURL: "http://localhost:8000",
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
  });

  //  拦截器
  // 请求
  instance.interceptors.request.use(
    (config) => {
      // 获取token 从浏览器缓存
      const token = window.localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    (error) => {
      console.log(`请求失败. ${error}`);
    }
  );

  // 响应
  instance.interceptors.response.use(
    (res) => {
      ElMessage({
        message: res.data.msg,
        type: "success",
      });
      return res.data.data;
    },
    (error) => {
      console.log(error);
    }
  );

  // 发送请求
  return instance(config);
}
