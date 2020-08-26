// 就项目中迁移过来的页面api
// policy/insuredCityConfig/queryInsuredCityConfigListByInsCom
import { http } from '@/api/index'
import { API } from './api-config'

const queryInsuredCityConfigListByInsCom = data => {
    return http.myEasyMessage(API.queryInsuredCityConfigListByInsCom, data)
}

export default {
    queryInsuredCityConfigListByInsCom
}
