// 报表中心
import { http } from '@/api/index'
import { API } from './api-config'

const selectProductShareClick = data => {
    return http.myEasyMessage(API.selectProductShareClick, data)
}

const getByTypePartnerList = data => {
    return http.myEasyMessage(API.getByTypePartnerList, data)
}

const sifnInRewardJournal = data => {
    return http.myEasyMessage(API.sifnInRewardJournal, data)
}

const queryAgentReport = data => {
    return http.myEasyMessage(API.queryAgentReport, data)
}

const queryAllCount = data => {
    return http.myEasyMessage(API.queryAllCount, data)
}

const exportAgentDetailReportExcel = data => {
    http.download(API.exportAgentDetailReportExcel, data)
}

const productShareClickDetail = data => {
    return http.myEasyMessage(API.productShareClickDetail, data)
}



export default {
    selectProductShareClick,
    getByTypePartnerList,
    sifnInRewardJournal,
    queryAgentReport,
    queryAllCount,
    exportAgentDetailReportExcel,
    productShareClickDetail
}
