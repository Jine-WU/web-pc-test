/**
 * 账户管理相关
 */
import { http, API_ROOT } from '@/api/index'
import { API } from './api-config'
// 数据导出
function exportUserInfo(queryObj) {
    const form = document.createElement('form')
    const style = document.createAttribute('style')
    form.setAttributeNode(style)
    form.style.display = 'none'
    form.setAttribute('target', '')
    form.setAttribute('method', 'post')
    form.setAttribute('action', API_ROOT + API.exportUserInfo + '?access_token=' + JSON.parse(window.localStorage.ROLE).token)
    const input1 = document.createElement('input')
    input1.setAttribute('type', 'hidden')
    input1.setAttribute('name', 'queryObj')
    input1.setAttribute('value', JSON.stringify(queryObj)) //, JSON.stringify(queryObj)
    document.body.appendChild(form)
    form.appendChild(input1)
    form.submit()
}
const accountPartners = data => {
    return http.myEasyMessage(API.accountPartners, data)
}
const accountAgents = data => {
    return http.myEasyMessage(API.accountAgents, data)
}
const agentAccountDetails = data => {
    return http.myEasyMessage(API.agentAccountDetails, data)
}
const fetchWithdrawalList = data => {
    return http.myEasyMessage(API.channelOrderPageQuery, data)
}
const fetchWithdrawalDetail = data => {
    return http.myEasyMessage(API.withdrawalDetail, data)
}
const getCerInfo = data => {
    return http.myEasyMessage(API.getCerInfo, data)
}
const cashAccount = data => {
    return http.myEasyMessage(API.cashAccount, data)
}
const withdrawalThrough = data => {
    return http.myEasyMessage(API.withdrawalThrough, data)
}
const withdrawalEditorFlag = data => {
    return http.myEasyMessage(API.withdrawalEditorFlag, data)
}
const accountAuditList = data => {
    return http.myEasyMessage(API.accountAuditList, data)
}
const accountList = data => {
    return http.myEasyMessage(API.accountList, data)
}
const getApplyInfo = data => {
    return http.myEasyMessage(API.getApplyInfo, data)
}
const getCertification = data => {
    return http.myEasyMessage(API.getCertification, data)
}
const updateInfo = data => {
    return http.myEasyMessage(API.channelCertificationModification, data)
}
const updateBankCard = data => {
    return http.myEasyMessage(API.updateBankCard, data)
}
const partnerCount = data => {
    return http.myEasyMessage(API.partnerCount, data)
}
const partnrRecharge = data => {
    return http.myEasyMessage(API.partnrRecharge, data)
}
const getPartnerWallet = data => {
    return http.myEasyMessage(API.getPartnerWallet, data)
}
const getRecords = data => {
    return http.myEasyMessage(API.channelWalletPartnerRecords, data)
}
const getWalletAgent = data => {
    return http.myEasyMessage(API.getWalletAgent, data)
}
const countTeamMoney = data => {
    return http.myEasyMessage(API.countTeamMoney, data)
}
const getWalletAgentTotal = data => {
    return http.myEasyMessage(API.channelWalletIndex, data)
}
const walletRecycle = data => {
    return http.post(API.walletRecycle, data)
}
const recycle = data => {
    return http.myEasyMessage(API.recycle, data)
}
const agentRechargeRecord = data => {
    return http.myEasyMessage(API.channelOrderPageQuery, data)
}
const refund = data => {
    return http.myEasyMessage(API.refund, data)
}
const walletPartnerOver = data => {
    return http.myEasyMessage(API.channelWalletIndex, data)
}
const walletAgentDetailList = data => {
    return http.myEasyMessage(API.walletAgentDetailList, data)
}
const transferToAgent = data => {
    return http.myEasyMessage(API.transferToAgent, data)
}
const smsAccountOver = data => {
    return http.post(API.smsAccountOver, data)
}
const transferToPartner = data => {
    return http.post(API.transferToPartner, data)
}
const rechargeCode = data => {
    return http.myEasyMessage(API.rechargeCode, data)
}
const smsTransferToAgent = data => {
    return http.post(API.smsTransferToAgent, data)
}
const getAgentList = data => {
    return http.post(API.getAgentList, data)
}
const parnerMainToAgentLog = data => {
    return http.myEasyMessage(API.parnerMainToAgentLog, data)
}
const smsLog = data => {
    return http.myEasyMessage(API.log, data)
}
const pageQueryWallet = data => {
    return http.myEasyMessage(API.pageQueryWallet, data)
}
const expendLog = data => {
    return http.myEasyMessage(API.expendLog, data)
}
const uploadImgURL = data => {
    return http.post(API.uploadImgURL, data)
}
export default {
    accountPartners,
    accountAgents,
    agentAccountDetails,
    fetchWithdrawalList,
    exportUserInfo,
    fetchWithdrawalDetail,
    getCerInfo,
    cashAccount,
    withdrawalThrough,
    withdrawalEditorFlag,
    accountAuditList,
    accountList,
    getApplyInfo,
    getCertification,
    updateInfo,
    updateBankCard,
    uploadImgURL,
    partnerCount,
    partnrRecharge,
    getPartnerWallet,
    getRecords,
    getWalletAgent,
    countTeamMoney,
    getWalletAgentTotal,
    walletRecycle,
    recycle,
    agentRechargeRecord,
    refund,
    walletPartnerOver,
    walletAgentDetailList,
    transferToAgent,
    smsAccountOver,
    transferToPartner,
    rechargeCode,
    smsTransferToAgent,
    getAgentList,
    parnerMainToAgentLog,
    smsLog,
    pageQueryWallet,
    expendLog
}
