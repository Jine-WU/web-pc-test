/**
 * 沃乐动-后台管理api
 */

import { http } from '@/api/wotong-http'
import { API } from './api-config'
/**
 * 设备-应用款式信息能否删除
 * */
const applyStyleCanDelete = data => {
    return http.post(API.applyStyleCanDelete, data)
}
/**
 * 设备-应用款式信息修改
 * */
const updateApplyStyle = data => {
    return http.request(API.updateApplyStyle, data)
}
/**
 * 设备-应用款式信息新增
 * */
const addApplyStyle = data => {
    return http.request(API.addApplyStyle, data)
}
/**
 * 设备-应用款式信息删除
 * */
const deleteApplyStyle = async data => {
    const brand = await applyStyleCanDelete(data.data)
    if (brand.result === '1') {
        return http.request(API.deleteApplyStyle, data)
    }
    else {
        return {
            result: '0',
            message: '该应用款式存在关联，不能删除！'
        }
    }
}
/**
 * 设备-应用款式信息列表
 * */
const getListApplyStyle = data => {
    return http.request(API.getListApplyStyle, data)
}

/**
 * 设备-设备信息能否删除
 * */
const goodsCanDelete = data => {
    return http.post(API.goodsCanDelete, data)
}
/**
 * 设备-设备信息修改
 * */
const updateGoods = data => {
    return http.request(API.updateGoods, data)
}
/**
 * 设备-设备信息新增
 * */
const addGoods = data => {
    return http.request(API.addGoods, data)
}
/**
 * 设备-设备信息删除
 * */
const deleteGoods = async data => {
    const brand = await goodsCanDelete(data.data)
    if (brand.result === '1') {
        return http.request(API.deleteGoods, data)
    }
    else {
        return {
            result: '0',
            message: '该设备存在关联，不能删除！'
        }
    }
}
/**
 * 设备-设备信息列表
 * */
const getListGoods = data => {
    return http.request(API.getListGoods, data)
}


/**
 * 设备-应用信息能否删除
 * */
const applicationCanDelete = data => {
    return http.post(API.applicationCanDelete, data)
}
/**
 * 设备-应用信息修改
 * */
const updateApplication = data => {
    return http.request(API.updateApplication, data)
}
/**
 * 设备-应用信息新增
 * */
const addApplication = data => {
    return http.request(API.addApplication, data)
}
/**
 * 设备-应用信息删除
 * */
const deleteApplication = async data => {
    const brand = await applicationCanDelete(data.data)
    if (brand.result === '1') {
        return http.request(API.deleteApplication, data)
    }
    else {
        return {
            result: '0',
            message: '该应用存在关联，不能删除！'
        }
    }
}
/**
 * 设备-应用信息列表
 * */
const getListApplication = data => {
    return http.request(API.getListApplication, data)
}


/**
 * 设备-固件列表
 * */
const listOta = data => {
    return http.request(API.listOta, data)
}

/**
 * 设备-固件获取
 * */
const getOta = data => {
    return http.request(API.getOta, data)
}

/**
 * 设备-固件修改
 * */
const editOta = data => {
    return http.request(API.editOta, data)
}

/**
 * 设备-固件删除
 * */
const deleteOta = data => {
    return http.request(API.deleteOta, data)
}

/**
 * 设备-固件新增
 * */
const addOta = data => {
    return http.request(API.addOta, data)
}

/**
 * 设备-品牌信息能否删除
 * */
const brandCanDelete = data => {
    return http.post(API.brandCanDelete, data)
}
/**
 * 设备-品牌信息修改
 * */
const updateBrand = data => {
    return http.request(API.updateBrand, data)
}
/**
 * 设备-品牌信息新增
 * */
const addBrand = data => {
    return http.request(API.addBrand, data)
}
/**
 * 设备-品牌信息删除
 * */
const deleteBrand = async data => {
    const brand = await brandCanDelete(data.data)
    if (brand.result === '1') {
        return http.request(API.deleteBrand, data)
    }
    else {
        return {
            result: '0',
            message: '该品牌存在关联系列，不能删除！'
        }
    }
}
/**
 * 设备-品牌信息列表
 * */
const getListBrand = data => {
    return http.request(API.getListBrand, data)
}


/**
 * 设备-渠道信息能否删除
 * */
const channelCanDelete = data => {
    return http.post(API.channelCanDelete, data)
}
/**
 * 设备-渠道信息修改
 * */
const updateChannel = data => {
    return http.request(API.updateChannel, data)
}
/**
 * 设备-渠道信息新增
 * */
const addChannel = data => {
    return http.request(API.addChannel, data)
}
/**
 * 设备-渠道信息删除
 * */
const deleteChannel = async data => {
    const channel = await channelCanDelete(data.data)
    if (channel.result === '1') {
        return http.request(API.deleteChannel, data)
    }
    else {
        return {
            result: '0',
            message: '该渠道存在关联，不能删除！'
        }
    }
}
/**
 * 设备-渠道信息列表
 * */
const getListChannel = data => {
    return http.request(API.getListChannel, data)
}


/**
 * 设备-系列信息能否删除
 * */
const seriesCanDelete = data => {
    return http.post(API.seriesCanDelete, data)
}
/**
 * 设备-系列信息修改
 * */
const updateSeries = data => {
    return http.request(API.updateSeries, data)
}
/**
 * 设备-系列信息新增
 * */
const addSeries = data => {
    return http.request(API.addSeries, data)
}
/**
 * 设备-系列信息删除
 * */
const deleteSeries = async data => {
    const series = await seriesCanDelete(data.data)
    if (series.result === '1') {
        return http.request(API.deleteSeries, data)
    }
    else {
        return {
            result: '0',
            message: '该系列存在关联款式，不能删除！'
        }
    }
}
/**
 * 设备-系列信息列表
 * */
const getListSeries = data => {
    return http.request(API.getListSeries, data)
}


/**
 * 设备-款式信息能否删除
 * */
const styleCanDelete = data => {
    return http.post(API.styleCanDelete, data)
}
/**
 * 设备-款式信息修改
 * */
const updateStyle = data => {
    return http.request(API.updateStyle, data)
}
/**
 * 设备-款式信息新增
 * */
const addStyle = data => {
    return http.request(API.addStyle, data)
}
/**
 * 设备-款式信息删除
 * */
const deleteStyle = async data => {
    const style = await styleCanDelete(data.data)
    if (style.result === '1') {
        return http.request(API.deleteStyle, data)
    }
    else {
        return {
            result: '0',
            message: '该款式存在关联，不能删除！'
        }
    }
}
/**
 * 设备-款式信息列表
 * */
const getListStyle = data => {
    return http.request(API.getListStyle, data)
}


/**
 * 消息中心-发送消息
 * */
const sendLocalMessage = data => {
    return http.request(API.sendLocalMessage, data)
}

/**
 * app菜单信息获取(new)
 * @param data
 * @returns {*}
 */
const getMenuInfo = data => {
    return http.myGlobalLoadingMessage(API.getMenuInfo, data)
}

const creatShortLink = data => {
    return http.myEasyMessage(API.marketingByApplication.creatShortLink, data)
}

const partnerByApply = data => {
    return http.myEasyMessage(API.marketingByApplication.partnerByApply, data)
}

export default {
    sendLocalMessage,
    getMenuInfo,
    getListBrand,
    deleteBrand,
    addBrand,
    updateBrand,
    updateChannel,
    addChannel,
    deleteChannel,
    getListChannel,
    updateSeries,
    addSeries,
    deleteSeries,
    getListSeries,
    updateStyle,
    addStyle,
    deleteStyle,
    getListStyle,
    listOta,
    getOta,
    editOta,
    deleteOta,
    addOta,
    updateApplication,
    addApplication,
    deleteApplication,
    getListApplication,
    updateGoods,
    addGoods,
    deleteGoods,
    getListGoods,
    updateApplyStyle,
    addApplyStyle,
    deleteApplyStyle,
    getListApplyStyle,
    creatShortLink,
    partnerByApply
}
