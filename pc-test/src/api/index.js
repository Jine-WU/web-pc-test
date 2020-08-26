/**
 * http配置
 */

import { Message } from 'element-ui'
import { HttpRequest, API_ROOT, getToken } from 'woyun-base'
import { loadin, remove } from '@/libs/loading'
import axios from 'axios'

class HttpRequest1 extends HttpRequest {}
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
    },

    // 下载文件（表单提交）
    download(url, queryObj) {
        let requestUrl = API_ROOT + '/' + url
        const newUrl = new URL(requestUrl)
        console.log('newUrl', newUrl)
        if (newUrl.search) {
            requestUrl = requestUrl + '&access_token=' + getToken()
        }
        else {
            requestUrl = requestUrl + '?access_token=' + getToken()
        }
        const form = document.createElement('form')//定义一个form表单
        form.style = 'display:none'
        form.target = '_blank'
        form.method = 'post'
        form.action = requestUrl

        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = 'queryObj'
        input.value = JSON.stringify(queryObj)
        form.appendChild(input)
        document.body.appendChild(form)

        form.submit() // 表单提交
        document.body.removeChild(form)
    },

    // 下载流文件
    downloadBlob(url, data) {
        const requestUrl = API_ROOT + url + '?access_token=' + getToken()
        return axios({
            method: 'post',
            url: requestUrl,
            data: data,
            responseType: 'blob'
        }).then(res => {
            const startNum = res.headers['content-disposition'].indexOf('filename="') + 10
            const endNum = res.headers['content-disposition'].lastIndexOf('"')
            const content = res.data
            const blob = new Blob([content])
            const fileName = res.headers['content-disposition'].slice(startNum, endNum)
            //对于<a>标签，只有 Firefox 和 Chrome（内核） 支持 download 属性
            //IE10以上支持blob但是依然不支持download
            if ('download' in document.createElement('a')) { // 支持a标签download的浏览器
                const link = document.createElement('a') // 创建a标签
                link.download = fileName // a标签添加属性
                link.style.display = 'none'
                link.href = URL.createObjectURL(blob)
                document.body.appendChild(link)
                link.click() // 执行下载
                URL.revokeObjectURL(link.href) // 释放url
                document.body.removeChild(link) // 释放标签
            }
            else { // 其他浏览器
                navigator.msSaveBlob(blob, fileName)
            }
            return Promise.resolve({ flag: true })
        }).catch((err) => {
            console.log(err)
            Message({
                message: err.message,
                type: 'error'
            })
            return Promise.reject(err)
        })
    }
})

const http = new HttpRequest1()



export {
    http,
    API_ROOT
}
