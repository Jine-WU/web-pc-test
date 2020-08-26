/**
 * 鹰眼摄像头
 */

import { http } from '@/api/index'
import { API } from './api-config'

/**
 * 删除摄像头
 * */
const clientDeleteByKey = data => {
    return http.post(API.clientDeleteByKey, data)
}

/**
 * 获取摄像头列表
 * */
const clientPageQuery = data => {
    return http.post(API.clientPageQuery, data)
}

/**
 * 新增、编辑
 * */
const clientSave = data => {
    return http.post(API.clientSave, data)
}
/**
 * 地区查询
 * */
const addressQuery = data => {
    return http.post(API.addressQuery, data)
}

export default {
    clientPageQuery,
    clientSave,
    addressQuery,
    clientDeleteByKey
}
