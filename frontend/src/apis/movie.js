import { request } from '@/utils/request'

/**
 * 获取电影列表接口
 * @returns {AxiosPromise}
 */
export default function getMovieList(){
    return request({
        url: "/movie"
    })
}
