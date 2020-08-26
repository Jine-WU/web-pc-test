/**
 * 渠道管理相关接口
 */

import { http } from '@/api/index'
import { constant } from 'woyun-base'
import { API } from './api-config'

const shareUrl = ['dev', 'tst'].includes(constant.API_ENV) ? 'http://oauth2tst.woyunsoft.com/share' : 'http://oauth2.woyunsoft.com/share'

/**
 * 获取城市列表
 * @param data
 * @returns {*}
 */
const getCityList = data => {
    return http.myEasyMessage(API.getCityList, data)
}

/**
 * 保存已选城市
 * @param data
 * @returns {*}
 */
const saveSelectedCity = data => {
    return http.myEasyMessage(API.saveSelectedCity, data)
}

/**
 * 获取已选城市
 * @param data
 * @returns {*}
 */
const querySelectedCity = data => {
    return http.myEasyMessage(API.querySelectedCity, data)
}

/**
 * 获取未配置网点城市列表
 * @param data
 * @returns {*}
 */
const queryNoSubPartnerCityConfigs = data => {
    return http.myEasyMessage(API.queryNoSubPartnerCityConfigs, data)
}

/**
 * 获取配置多个网点的城市列表
 * @param data
 * @returns {*}
 */
const queryMultSubPartnerCityConfigs = data => {
    return http.myEasyMessage(API.queryMultSubPartnerCityConfigs, data)
}

const deletePartnerAreaConfig = data => {
    return http.myEasyMessage(API.deletePartnerAreaConfig, data)
}

const saveSinglePartnerAreaConfig = data => {
    return http.myEasyMessage(API.saveSinglePartnerAreaConfig, data)
}

const delSubPartnerAreaConfigByKey = data => {
    return http.myEasyMessage(API.delSubPartnerAreaConfigByKey, data)
}

/**
 * 获取团队定义下列表
 * @param data
 * @returns {*}
 */
const getTeamListForDefinition = data => {
    return http.request(API.getTeamListForDefinition, data)
}

/**
 * 新增团队
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const addTeam = data => {
    return http.request(API.addTeam, data)
}

/**
 * 删除团队
 * @param data
 * @returns {*}
 */
const deleteTeam = data => {
    return http.myEasyMessage(API.deleteTeam, data)
}

/**
 * 获取团队详情
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const getTeamDetail = data => {
    return http.request(API.getTeamDetail, data)
}

/**
 * 修改团队信息
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const updateTeam = data => {
    return http.request(API.updateTeam, data)
}

const getTeamListForBusiness = data => {
    return http.myEasyMessage(API.getTeamListForBusiness, data)
}

const queryAgentCount = data => {
    return http.myEasyMessage(API.queryAgentCount, data)
}

const getAgentListForTeam = data => {
    return http.myEasyMessage(API.getAgentListForTeam, data)
}

const queryPremCount = data => {
    return http.myEasyMessage(API.queryPremCount, data)
}

const getPremListForTeam = data => {
    return http.myEasyMessage(API.getPremListForTeam, data)
}

const queryPolicyCount = data => {
    return http.myEasyMessage(API.queryPolicyCount, data)
}

const getPolicyListForTeam = data => {
    return http.myEasyMessage(API.getPolicyListForTeam, data)
}

const getSalesmanList = data => {
    return http.request(API.getSalesmanList, data)
}

const exportAgentData = data => {
    http.download(API.exportAgentData, data)
}

const exportAgentBankInfo = data => {
    http.download(API.exportAgentBankInfo, data)
}

const resetAgentPwd = data => {
    return http.myGlobalLoadingMessage(API.resetAgentPwd, data)
}

const delAgent = data => {
    return http.myEasyMessage(API.delAgent, data)
}

const getNode = data => {
    return http.myEasyMessage(API.getPartnerList, data)
}

const addAgent = data => {
    return http.request(API.addAgent, data)
}

const getAgentMessage = data => {
    return http.request(API.getAgentMessage, data)
}

const getConfigByAgent = data => {
    return http.myEasyMessage(API.decCommonPlatformConfigGetConfig, data)
}

const getRecomUrl = data => {
    return http.myEasyMessage(API.getRecomUrl, data)
}

const getWithdrawal = data => {
    return http.myEasyMessage(API.getWithdrawal, data)
}

const updateAgent = data => {
    return http.request(API.updateAgent, data)
}

const editCertification = data => {
    return http.myEasyMessage(API.channelCertificationModification, data)
}

const getCerInfoMsg = data => {
    return http.post(API.getCerInfo, data)
}

const agentSummary = data => {
    return http.post(API.agentSummary, data)
}

const getNetWorkByPartner = data => {
    return http.myEasyMessage(API.getNetWorkByPartner, data)
}

/**
 * 获取营业部信息
 * @param data
 * @returns {*}
 */
const getPartnerInfo = data => {
    return http.request(API.getPartnerInfo, data)
}

/**
 * 获取营业部网点列表
 * @param data
 * @returns {*}
 */
const getNetWorkList = data => {
    return http.request(API.getNetWorkList, data)
}

/**
 * 获取渠道选项
 * @returns {*}
 */
const getChannelList = () => {
    return http.myEasyMessage(API.getChannelList, {})
}

/**
 * 新增营业部&网点
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const createPartner = data => {
    return http.request(API.createPartner, data)
}

/**
 * 修改营业部&网点
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const updatePartner = data => {
    return http.request(API.updatePartner, data)
}

/**
 * 删除营业部&网点
 * @param data
 * @returns {*}
 */
const deletePartner = data => {
    return http.myEasyMessage(API.deletePartner, data)
}

const insComProtocolOfCarList = data => {
    return http.myGlobalLoadingMessage(API.insComProtocolOfCarList, data)
}

const saveInsuredCItyConfig = data => {
    return http.request(API.saveInsuredCItyConfig, data)
}

const getConfigForNameChannel = data => {
    return http.request(API.decCommonPlatformConfigGetConfig, data)
}

const saveAppConfig = data => {
    return http.request(API.decCommonPlatformConfigSaveConfig, data)
}

const getPartnerList = data => {
    return http.request(API.getNetWorkByPartner, data)
}

const queryChannel = data => {
    return http.myEasyMessage(API.queryChannel, data)
}

const saveChannel = data => {
    return http.myEasyMessage(API.saveChannel, data)
}

const updateNotEmptyChannel = data => {
    return http.myEasyMessage(API.updateNotEmptyChannel, data)
}

const deleteByKeyChannel = data => {
    return http.myEasyMessage(API.deleteByKeyChannel, data)
}

/***********************客户信息****************/
const getCustomerConfigList = data => {
    return http.myEasyMessage(API.decCommonPlatformConfigGetConfig, data)
}

const saveCustomerConfig = data => {
    return http.myEasyMessage(API.decCommonPlatformConfigSaveConfig, data)
}

const pageQueryClient = data => {
    return http.myEasyMessage(API.pageQueryClient, data)
}

/**
 * 新业务员筛选列表接口
 * @param data
 */
const getSalesmanListByNew = data => {
    return http.request(API.getSalesmanListByNew, data)
}

const exportSalesmanList = data => {
    http.download(API.exportSalesmanList, data)
}

export default {
    getCityList,
    saveSelectedCity,
    querySelectedCity,
    queryNoSubPartnerCityConfigs,
    queryMultSubPartnerCityConfigs,
    saveSinglePartnerAreaConfig,
    deletePartnerAreaConfig,
    delSubPartnerAreaConfigByKey,
    getTeamListForDefinition,
    addTeam,
    getTeamDetail,
    deleteTeam,
    updateTeam,
    getTeamListForBusiness,
    queryAgentCount,
    getAgentListForTeam,
    queryPremCount,
    getPremListForTeam,
    queryPolicyCount,
    getPolicyListForTeam,
    getSalesmanList,
    exportAgentData,
    exportAgentBankInfo,
    resetAgentPwd,
    delAgent,
    getNode,
    addAgent,
    getAgentMessage,
    getConfigByAgent,
    getRecomUrl,
    getWithdrawal,
    shareUrl,
    updateAgent,
    editCertification,
    getCerInfoMsg,
    getNetWorkByPartner,
    getPartnerInfo,
    getNetWorkList,
    getChannelList,
    createPartner,
    updatePartner,
    deletePartner,
    insComProtocolOfCarList,
    saveInsuredCItyConfig,
    getConfigForNameChannel,
    saveAppConfig,
    queryChannel,
    saveChannel,
    updateNotEmptyChannel,
    deleteByKeyChannel,
    getPartnerList,
    agentSummary,
    getCustomerConfigList,
    saveCustomerConfig,
    pageQueryClient,
    getSalesmanListByNew,
    exportSalesmanList
}
