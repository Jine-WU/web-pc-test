/**
 * 工会管理相关接口
 */

import { http } from '@/api/index'
import { API } from './api-config'

const test = data => {
    return http.post(API.queryNoSubPartnerCityConfigs, data)
}
export default {
    test
}
