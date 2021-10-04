import { request } from "@/utils/request";

const URL = "/user";

export function login(data) {
  data = `username=${data.username}&password=${data.password}`;
  return request({
    url: "/login",
    method: "post",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data,
  });
}

export function userInfo() {
  return request({
    url: URL,
  });
}

export function updateUser(nickname) {
  return request({
    url: URL,
    method: "put",
    data: {
      nickname,
      password: "",
      username: "",
    },
  });
}
