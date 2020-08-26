/**
 * 公共相关接口
 */

import { http } from '@/api/index'
import { API } from './api-config'

/**
 * 登录接口(整合核心&平台)
 * @param data
 * @returns {*}
 */
const login = data => {
    return http.post(API.login, data)
}

/**
 * 获取报价员营业部渠道
 * @param data
 * @returns {*}
 */
const getAgentPartnerByMobile = data => {
    return http.myEasyMessage(API.getAgentPartnerByMobile, data)
}

/**
 * 报价系统登录
 * @param data
 * @returns {*}
 */
const agentLogin = data => {
    return http.request(API.agentLogin, data)
}

/**
 * 获取当前登录用户应用菜单——报价系统
 * @param data
 * @returns {*}
 */
const getAgentMenu = data => {
    return http.myEasyMessage(API.getAgentMenu, data)
}

/**
 * 获取字典
 * @returns {*}
 */
const formatByGroupCode = () => {
    return http.myGlobalLoading(API.formatByGroupCode)
}

/**
 * 获取自定义字典
 * @returns {*}
 */
const getConfigForName = () => {
    const data = {
        name: 'web_sys_dictionary',
        dataSource: 'woyunbao'
    }
    return http.myEasyMessage(API.getConfigForName, data)
}

/**
 * 营业部筛选数据
 * @param data
 * @returns {*}
 */
const partnerListForSelect = (data) => {
    return http.myEasyMessage(API.getPartnerList, data)
}

/**
 * 团队筛选数据
 * @param data
 * @returns {*}
 */
const teamListForSelect = (data) => {
    return http.myEasyMessage(API.teamListForSelect, data)
}

const getAgentForTeam = data => {
    return http.myEasyMessage(API.getAgentList, data)
}

const getAddressList = data => {
    return http.myEasyMessage(API.addressQuery, data)
}

export default {
    login,
    agentLogin,
    getAgentPartnerByMobile,
    getAgentMenu,
    formatByGroupCode,
    getConfigForName,
    partnerListForSelect,
    teamListForSelect,
    getAgentForTeam,
    getAddressList
}
