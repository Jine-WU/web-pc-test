/**
 * 日志
 */

import { http } from '@/api/index'
import { API } from './api-config'

/**
 * 操作日志列表
 * */
const sysOperateLogPageQuery = data => {
    return http.post(API.sysOperateLogPageQuery, data)
}

/**
 * 登录日志列表
 * */
const sysLoginLogPageQuery = data => {
    return http.post(API.sysLoginLogPageQuery, data)
}

export default {
    sysOperateLogPageQuery,
    sysLoginLogPageQuery
}
