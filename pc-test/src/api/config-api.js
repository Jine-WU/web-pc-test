/**
 * 系统配置中心相关接口
 */

import { http } from '@/api/index'
import { API } from './api-config'

const getExportModelList = data => {
    return http.request(API.getExportModelList, data)
}

const getExportHeaderModel = data => {
    return http.request(API.getExportHeaderModel, data)
}

const saveExportMatchModel = data => {
    return http.request(API.saveExportMatchModel, data)
}

const getCurExportModel = data => {
    return http.request(API.getCurExportModel, data)
}

const deleteByModelId = data => {
    return http.myEasyMessage(API.deleteByModelId, data)
}

export default {
    getExportModelList,
    getExportHeaderModel,
    saveExportMatchModel,
    getCurExportModel,
    deleteByModelId
}
