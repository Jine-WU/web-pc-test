import http from './http'

const API = {
  getMemberList: 'http://183.56.220.231:2020/emp/selectTestData'
}


const getMemberList = data => {
    return http.post(API.getMemberList, data)
}

export default {
    getMemberList
}
