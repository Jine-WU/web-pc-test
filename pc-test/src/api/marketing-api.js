/**
 * 推送系统接口
 */
import { http } from '@/api/index'
import { API } from './api-config'

const getApplicationPushList = data => {
    return http.request(API.marketingByApplication.getApplicationPushList, data)
}

const getApplicationPushInfo = data => {
    return http.request(API.marketingByApplication.getApplicationPushInfo, data)
}

const createPushByApplication = data => {
    return http.request(API.marketingByApplication.createPushByApplication, data)
}

const deletePushByApplication = data => {
    return http.myEasyMessage(API.marketingByApplication.deletePushByApplication, data)
}

const updateExamPushByApplication = data => {
    return http.request(API.marketingByApplication.updateExamPushByApplication, data)
}
const updatePushOnOffByRecordIdByApplication = data => {
    return http.myEasyMessage(API.marketingByApplication.updatePushOnOffByRecordIdByApplication, data)
}

const editRecordByApplication = data => {
    return http.request(API.marketingByApplication.editRecordByApplication, data)
}
const submitEditRecordByApplication = data => {
    return http.request(API.marketingByApplication.submitEditRecordByApplication, data)
}

const getTimeDicList = data => {
    return http.myEasyMessage(API.marketingByApplication.getTimeDicList, data)
}

const getDialogByWeChatList = data => {
    return http.request(API.dialogByWeChat.getDialogList, data)
}

const createDialogByWeChat = data => {
    return http.request(API.dialogByWeChat.createDialog, data)
}

const editDialogAndExamByWeChat = data => {
    return http.request(API.dialogByWeChat.editDialogAndExam, data)
}

const updateExamByWeChat = data => {
    return http.request(API.dialogByWeChat.updateExam, data)
}

const deleteDialogByWeChat = data => {
    return http.myEasyMessage(API.dialogByWeChat.deleteDialog, data)
}

const getDialogInfoByWeChat = data => {
    return http.request(API.dialogByWeChat.getDialogInfo, data)
}

const importAgentInfoByWeChat = data => {
    return http.request(API.dialogByWeChat.importAgentInfo, data)
}

const downloadErrorDataByWeChat = data => {
    return http.download(API.dialogByWeChat.downloadErrorData, data)
}

const getActivityLotteryList = data => {
    return http.request(API.activityLottery.getActivityLotteryList, data)
}

const saveActivityLottery = data => {
    return http.post(API.activityLottery.saveActivityLottery, data)
}

const updateActivityLottery = data => {
    return http.post(API.activityLottery.updateActivityLottery, data)
}

const savePrizeList = data => {
    return http.post(API.activityLottery.savePrizeList, data)
}

const importUserByActivityLottery = data => {
    return http.post(API.activityLottery.importUserByActivityLottery, data)
}

const saveWebLinkConfig = data => {
    return http.post(API.activityLottery.saveWebLinkConfig, data)
}

const saveWebLinkMenu = data => {
    return http.post(API.activityLottery.saveWebLinkMenu, data)
}

const getActivityLotteryDetail = data => {
    return http.request(API.activityLottery.getActivityLotteryDetail, data)
}

const getActivityLotteryRecordList = data => {
    return http.request(API.activityLottery.getActivityLotteryRecordList, data)
}

const updateRecord = data => {
    return http.myEasyMessage(API.activityLottery.updateRecord, data)
}

const downloadRecordData = data => {
    return http.download(API.activityLottery.downloadRecordData, data)
}

const getTemplateListByWeChat = data => {
    return http.request(API.pushByWeChat.getTemplateListByWeChat, data)
}

const getWeChatPushList = data => {
    return http.request(API.pushByWeChat.getWeChatPushList, data)
}

const importAgentInfoByWeChatPush = data => {
    return http.request(API.pushByWeChat.importAgentInfo, data)
}

const downloadErrorDataByWeChatPush = data => {
    return http.download(API.pushByWeChat.downloadErrorData, data)
}

const createPushByWeChat = data => {
    return http.request(API.pushByWeChat.createPushByWeChat, data)
}

const submitEditRecordByWeChat = data => {
    return http.request(API.pushByWeChat.submitEditRecordByWeChat, data)
}

const getWeChatPushInfo = data => {
    return http.request(API.pushByWeChat.getWeChatPushInfo, data)
}

const updateExamRecordByWeChat = data => {
    return http.request(API.pushByWeChat.updateExamRecord, data)
}

const deletePushByWeChat = data => {
    return http.myEasyMessage(API.pushByWeChat.deletePushByWeChat, data)
}

const updatePushOnOffByRecordIdByWeChat = data => {
    return http.myEasyMessage(API.pushByWeChat.updatePushOnOffByRecordId, data
    )
}

const createPushPreviewLink = data => {
    return http.request(API.pushByWeChat.createPushPreviewLink, data)
}

const getPassivePushList = data => {
    return http.request(API.passivePushByApplication.getPassivePushList, data)
}

const createPassivePushTask = data => {
    return http.request(API.passivePushByApplication.createPassivePushTask, data)
}

const getPassivePushInfo = data => {
    return http.request(API.passivePushByApplication.getPassivePushInfo, data)
}

const updatePassivePushTask = data => {
    return http.request(API.passivePushByApplication.updatePassivePushTask, data)
}

const importAgentByPassive = data => {
    return http.request(API.passivePushByApplication.importAgentByPassive, data)
}

const downloadErrorDataByPassive = data => {
    return http.download(API.passivePushByApplication.downloadErrorDataByPassive, data)
}

const messagePreviewByPassive = data => {
    return http.request(API.passivePushByApplication.messagePreviewByPassive, data)
}

export default {
    getApplicationPushList,
    getApplicationPushInfo,
    createPushByApplication,
    deletePushByApplication,
    updateExamPushByApplication,
    updatePushOnOffByRecordIdByApplication,
    editRecordByApplication,
    submitEditRecordByApplication,
    getTimeDicList,
    getDialogByWeChatList,
    createDialogByWeChat,
    editDialogAndExamByWeChat,
    updateExamByWeChat,
    deleteDialogByWeChat,
    getDialogInfoByWeChat,
    importAgentInfoByWeChat,
    downloadErrorDataByWeChat,
    getActivityLotteryList,
    saveActivityLottery,
    updateActivityLottery,
    savePrizeList,
    importUserByActivityLottery,
    saveWebLinkConfig,
    saveWebLinkMenu,
    getActivityLotteryDetail,
    getActivityLotteryRecordList,
    updateRecord,
    downloadRecordData,
    getTemplateListByWeChat,
    getWeChatPushList,
    importAgentInfoByWeChatPush,
    downloadErrorDataByWeChatPush,
    createPushByWeChat,
    submitEditRecordByWeChat,
    getWeChatPushInfo,
    updateExamRecordByWeChat,
    deletePushByWeChat,
    updatePushOnOffByRecordIdByWeChat,
    createPushPreviewLink,
    getPassivePushList,
    createPassivePushTask,
    getPassivePushInfo,
    updatePassivePushTask,
    importAgentByPassive,
    downloadErrorDataByPassive,
    messagePreviewByPassive
}
