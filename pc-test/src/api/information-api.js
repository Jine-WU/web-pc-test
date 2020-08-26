/**
 * 会保险资讯配置相关
 */
import { http } from '@/api/index'
import { API } from './api-config'
// 渠道
const getPolicyArea = data => {
    return http.post(API.information.getPolicyArea, data)
}
const getPolicyAreaDetail = data => {
    return http.post(API.information.getPolicyAreaDetail, data)
}
const savePolicyArea = data => {
    return http.post(API.information.savePolicyArea, data)
}
const updatePolicyArea = data => {
    return http.post(API.information.updatePolicyArea, data)
}
const delPolicyArea = data => {
    return http.post(API.information.delPolicyArea, data)
}
// 字典
const getDictionary = data => {
    return http.post(API.information.getDictionary, data)
}
const getDictionaryDetail = data => {
    return http.post(API.information.getDictionaryDetail, data)
}
const updateDictionary = data => {
    return http.post(API.information.updateDictionary, data)
}
const saveDictionary = data => {
    return http.post(API.information.saveDictionary, data)
}
const delDictionary = data => {
    return http.post(API.information.delDictionary, data)
}
// 根据channelId查询树状关系
const getModelByChannelId = data => {
    return http.post(API.information.getModelByChannelId, data)
}
const getCascaderList = data => {
    return http.post(API.information.getCascaderList, data)
}
export default {
    getPolicyArea,
    getPolicyAreaDetail,
    savePolicyArea,
    updatePolicyArea,
    delPolicyArea,
    getDictionary,
    getDictionaryDetail,
    updateDictionary,
    getModelByChannelId,
    saveDictionary,
    delDictionary,
    getCascaderList
}
