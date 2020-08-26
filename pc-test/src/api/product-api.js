/**
 * 产品管理相关接口
 */

import { http } from '@/api/index'
import { API } from './api-config'

const getTagList = data => {
    return http.myGlobalLoadingMessage(API.getTagList, data)
}

const saveTag = data => {
    return http.myEasyMessage(API.saveTag, data)
}

const deleteTag = data => {
    return http.myEasyMessage(API.deleteTag, data)
}

const editTag = data => {
    return http.myEasyMessage(API.editTag, data)
}

const setupTag = data => {
    return http.myEasyMessage(API.setupTag, data)
}

const unTagProduct = data => {
    return http.myEasyMessage(API.unTagProduct, data)
}

const getProductList = data => {
    return http.myGlobalLoadingMessage(API.getProductList, data)
}

const getInsuranceCompanyList = data => {
    return http.myEasyMessage(API.getInsuranceCompanyList, data)
}

const getProductDetail = data => {
    return http.myGlobalLoadingMessage(API.getProductDetail, data)
}

const getProductTag = data => {
    return http.myEasyMessage(API.getProductTag, data)
}

/**
 * 获取标签列表
 * @returns {*}
 */
// const getListTag = (data) => {
//     return http.myGlobalLoading(API.getTagList, data)
// }

/**
 * 根据标签获取产品列表
 * @returns {*}
 */
const tagCommodityList = (data) => {
    return http.myGlobalLoading(API.tagCommodityList, data)
}

/**
 * 设置产品在标签内的权重
 * @returns {*}
 */
const setProductTagWeight = (data) => {
    return http.myGlobalLoading(API.setProductTagWeight, data)
}


/**
 * 营业部商品配置详情
 */
const getPartnerDetail = (data) => {
    return http.myGlobalLoading(API.getPartnerDetail + `/${data.id}`, data)
}

const promoteConfigProducts = (data) => {
    return http.myGlobalLoading(API.promoteConfigProducts, data)
}

const productPromoteSaveBatch = (data) => {
    return http.myGlobalLoading(API.productPromoteSaveBatch, data)
}

const productPromoteList = (data) => {
    return http.myGlobalLoading(API.productPromoteList, data)
}

const productPromoteDeleteByKey = (data) => {
    return http.myGlobalLoading(API.productPromoteDeleteByKey, data)
}

const getProductListByPartner = (data, flag = false) => {
    return flag ? http.request(API.getProductListByPartner, data) : http.myEasyMessage(API.getProductListByPartner, data)
}

/**
 * 保险商品相关
 */
const getCommodityConfigList = data => {
    return http.myGlobalLoadingMessage(API.pageQuery, data)
}
const getPartnerCommodityList = data => {
    return http.myGlobalLoadingMessage(API.getProductListByPartner, data)
}
// 操作接口 删除，下架，上架
const commodityOperation = (id, state) => {
    return http.myEasyMessage(`${API.commodityOperation}/${id}/${state}`)
}
// 营业部操作接口 删除，下架，上架
const partnerCommodityOperation = (id, state) => {
    return http.myEasyMessage(`${API.partnerCommodityOperation}/${id}/${state}`)
}
export default {
    getTagList,
    saveTag,
    deleteTag,
    editTag,
    setupTag,
    unTagProduct,
    getProductList,
    getInsuranceCompanyList,
    getProductDetail,
    getProductTag,
    // getListTag,
    tagCommodityList,
    setProductTagWeight,
    getPartnerDetail,
    promoteConfigProducts,
    productPromoteSaveBatch,
    productPromoteList,
    productPromoteDeleteByKey,
    getProductListByPartner,
    getCommodityConfigList,
    commodityOperation,
    getPartnerCommodityList,
    partnerCommodityOperation
}
