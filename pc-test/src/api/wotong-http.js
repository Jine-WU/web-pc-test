/**
 * http配置
 */

import { Message } from 'element-ui'
import { HttpRequest, API_ENV } from 'woyun-base'
import { loadin, remove } from '@/libs/loading'
class HttpRequest1 extends  HttpRequest {}
Object.assign(HttpRequest1.prototype, {

    // 全局加载loading
    myGlobalLoading(url, data) {
        // const loading = Loading.service({
        //     text:'加载中...'
        // })
        loadin()
        return http.post(url, data)
            .then(res => {
                const timer = setTimeout(() => {
                    // loading.close()
                    remove()
                    clearTimeout(timer)
                }, 300)
                return Promise.resolve(res)
            })
            .catch(err => {
                const timer = setTimeout(() => {
                    // loading.close()
                    remove()
                    clearTimeout(timer)
                }, 300)
                return Promise.reject(err)
            })
    },

    myEasyMessage(url, data) {
        return new Promise((resolve) => {
            return http.post(url, data)
                .then(res => {
                    return resolve(res)
                })
                .catch(err => {
                    Message({
                        message: err.message,
                        type: 'error'
                    })
                })
        })
    },
    myGlobalLoadingMessage(url, data) {
        // const loading = Loading.service({})
        loadin()

        return http.post(url, data)
            .then(res => {
                const timer = setTimeout(() => {
                    // loading.close()
                    remove()
                    clearTimeout(timer)
                }, 300)
                return Promise.resolve(res)
            })
            .catch(err => {
                // loading.close()
                remove()
                Message({
                    message: err.message,
                    type: 'error'
                })
                return Promise.reject(err)
            })
    }
})

const http = new HttpRequest1()
if (API_ENV === 'prod' || API_ENV === 'pre') {
    http.constructor('https://wt.wotongsoft.com/openapi')
}

export {
    http
}
