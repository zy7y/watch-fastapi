import { request } from "@/utils/request";

const URL = "/movie";

/**
 * 获取电影列表接口
 * @returns {AxiosPromise}
 */
export function getMovieList(params) {
  return request({
    url: URL,
    params,
  });
}

export function addMovie(data) {
  return request({
    url: URL,
    method: "post",
    data: data,
  });
}

/**
 * 删除电影接口
 * @param id 电影id
 * @returns {AxiosPromise}
 */
export function delMovie(id) {
  return request({
    url: `${URL}/${id}`,
    method: "delete",
  });
}

/**
 * 获取电影详情接口
 * @param id
 * @returns {AxiosPromise}
 */
export function getMovie(id) {
  return request({
    url: `${URL}/${id}`,
  });
}

export function updateMovie(id, data) {
  return request({
    url: `${URL}/${id}`,
    method: "put",
    data,
  });
}
