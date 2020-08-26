import axios from 'axios'

export const post = (url, data) => {
    return axios.post(url, data).then(res => {
        console.log('1')
        if (Number(res.status === 200)) { // 状态码 200
          console.log('2')
            if (Number(res.data.code) === 200) {
              console.log('3')
                return Promise.resolve(res.data.result)
            }
            else {
                return Promise.reject({ message: res.data.message })
            }
        }
        else {
            return Promise.reject({ message: `请求异常，状态码：${res.status}` })
        }
    }).catch(err => {
        return Promise.reject(err)
    })
}

export default {
    post
}
