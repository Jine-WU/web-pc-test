
import { http } from '@/api/index'
import { API } from './api-config'

/**
 * app模块配置获取
 * @param data
 * @returns {*}
 */
const getModuleList = data => {
    return http.myEasyMessage(API.getModuleList, data)
}

/**
 * app菜单信息获取(new)
 * @param data
 * @returns {*}
 */
const getMenuInfoMenu = data => {
    return http.myGlobalLoadingMessage(API.getMenuInfo, data)
}

/**
 * app菜单新增
 * @param data
 * @returns {*}
 */
const saveMenuInfo = data => {
    return http.myEasyMessage(API.saveMenuInfo, data)
}

/**
 * 删除菜单
 * @param data
 * @returns {*}
 */
const delMenuByKey = data => {
    return http.myEasyMessage(API.delMenuByKey, data)
}

/**
 * 修改菜单信息
 * @param data
 * @returns {*}
 */
const updateMenu = data => {
    return http.myEasyMessage(API.updateMenu, data)
}

/**
 * 通过复制新增菜单
 * @param data
 * @returns {*}
 */
const copyMenu = data => {
    return http.myEasyMessage(API.copyMenu, data)
}

/**
 * 根据公版菜单新增、修改
 * @param data
 * @returns {*}
 */
const addModule = data => {
    return http.myEasyMessage(API.addModule, data)
}

/**
 * 轮播图菜单管理
 * @param data
 */
const bannerMenuQuery = data => {
    return http.myGlobalLoadingMessage(API.bannerMenuQuery, data)
}

/**
 * 轮播图排序
 * @param data
 * @returns {*}
 */
const updateSort = data => {
    return http.myEasyMessage(API.updateSort, data)
}

/**
 * 资讯管理-列表
 * @param data
 * @returns {*}
 */
const getInformationList = data => {
    return http.myGlobalLoadingMessage(API.getInformationList, data)
}
const getInformationListNew = data => {
    return http.request(API.getInformationList, data)
}

/**
 * 资讯管理-详情
 * @param data
 * @returns {*}
 */
const getInformationDetail = data => {
    return http.myGlobalLoadingMessage(API.getInformationDetail, data)
}

/**
 * 资讯管理-编辑
 * @param data
 * @returns {*}
 */
const updateInformation = data => {
    return http.myEasyMessage(API.updateInformation, data)
}

/**
 * 资讯管理-删除
 * @param data
 * @returns {*}
 */
const delInformation = data => {
    return http.myEasyMessage(API.delInformation, data)
}

/**
 * 资讯管理-新增保存
 * @param data
 * @returns {*}
 */
const saveInformation = data => {
    return http.myEasyMessage(API.saveInformation, data)
}

const examineInformation = data => {
    return http.myEasyMessage(API.examineInformation, data)
}

const getPageTemplateList = data => {
    console.log('是啥', data)
    return http.request(API.weChatMenu.getPageTemplateList, data)
}

const savePageTemplate = data => {
    return http.request(API.weChatMenu.savePageTemplate, data)
}

const updatePageTemplate = data => {
    return http.request(API.weChatMenu.updatePageTemplate, data)
}

const getWeChatChannelList = data => {
    return http.request(API.weChatMenu.getWeChatChannelList, data)
}

const saveWeChatChannel = data => {
    return http.request(API.weChatMenu.saveWeChatChannel, data)
}

const updateWeChatChannel = data => {
    return http.request(API.weChatMenu.updateWeChatChannel, data)
}

const getPartnerByWeChat = data => {
    return http.myEasyMessage(API.weChatMenu.getPartnerByWeChat, data)
}

const saveMenuByWeChat = data => {
    return http.request(API.weChatMenu.saveMenuByWeChat, data)
}

const getMenuListByWeChat = data => {
    return http.request(API.weChatMenu.getMenuListByWeChat, data)
}

const updateMenuByWeChat = data => {
    return http.request(API.weChatMenu.updateMenuByWeChat, data)
}

const getPageTemplateListForSelect = data => {
    return http.myEasyMessage(API.weChatMenu.getPageTemplateListForSelect, data)
}

const deleteMenuByWeChat = data => {
    return http.myEasyMessage(API.weChatMenu.deleteMenuByWeChat, data)
}

const getWeChatChannelListForSelect = data => {
    return http.myEasyMessage(API.weChatMenu.getWeChatChannelListForSelect, data)
}

const getOriginListByWeChat = data => {
    return http.request(API.weChatMenu.getOriginListByWeChat, data)
}

const saveOriginInfoByWeChat = data => {
    return http.request(API.weChatMenu.saveOriginInfoByWeChat, data)
}

const  updateOriginInfoByWeChat = data => {
    return http.request(API.weChatMenu.updateOriginInfoByWeChat, data)
}

const deleteOriginByWeChat = data => {
    return http.myEasyMessage(API.weChatMenu.deleteOriginByWeChat, data)
}

export default {
    getModuleList,
    getMenuInfoMenu,
    saveMenuInfo,
    delMenuByKey,
    updateMenu,
    copyMenu,
    addModule,
    bannerMenuQuery,
    updateSort,

    getInformationList,
    getInformationListNew,
    getInformationDetail,
    updateInformation,
    delInformation,
    saveInformation,
    examineInformation,

    getPageTemplateList,
    savePageTemplate,
    updatePageTemplate,
    getWeChatChannelList,
    saveWeChatChannel,
    updateWeChatChannel,
    getPartnerByWeChat,
    saveMenuByWeChat,
    getMenuListByWeChat,
    updateMenuByWeChat,
    getPageTemplateListForSelect,
    deleteMenuByWeChat,
    getWeChatChannelListForSelect,
    getOriginListByWeChat,
    saveOriginInfoByWeChat,
    updateOriginInfoByWeChat,
    deleteOriginByWeChat
}
