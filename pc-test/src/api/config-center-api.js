
import { http } from '@/api/index'
import { API } from './api-config'

/**
 * 自定义配置列表获取
 * @param data
 * @returns {*}
 */
const queryCustomConfig = data => {
    return http.myEasyMessage(API.queryCustomConfig, data)
}
const savaCustomConfig = data => {
    return http.myEasyMessage(API.decCommonPlatformConfigSaveConfig, data)
}
const queryChannelDelimit = data => {
    return http.post(API.queryChannelDelimit, data)
}
const saveChannelDelimit = data => {
    return http.post(API.saveChannelDelimit, data)
}
const queryCityConfig = data => {
    return http.post(API.queryCityConfig, data)
}
const queryChannelList = data => {
    return http.myEasyMessage(API.queryChannelList, data)
}
const saveCityConfig = data => {
    return http.myEasyMessage(API.saveCityConfig, data)
}
const queryChannelLogs = data => {
    return http.post(API.queryChannelLogs, data)
}
const saveChannelConfig = data => {
    return http.post(API.saveChannelConfig, data)
}
const delChannelConfig = data => {
    return http.post(API.delChannelConfig, data)
}
const updateChannelConfig = data => {
    return http.post(API.updateChannelConfig, data)
}

export default {
    queryCustomConfig,
    savaCustomConfig,
    queryChannelDelimit,
    saveChannelDelimit,
    queryCityConfig,
    queryChannelList,
    saveCityConfig,
    queryChannelLogs,
    saveChannelConfig,
    delChannelConfig,
    updateChannelConfig
}
