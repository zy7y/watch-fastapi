import axios from "axios";

// 使用 export defalut 就不需要导入时 解包操作 {}
export function request(config){
//  创建axios 实例
  const instance = axios.create({
    // baseURL: "http://localhost:8000",
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000
  })

//  拦截器
  // 请求
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(`请求失败. ${error}`)
  })

  // 响应
  instance.interceptors.response.use(res => {
    return res.data.data
  }, error => {
    console.log(error)
  })

  // 发送请求
  return instance(config)
}