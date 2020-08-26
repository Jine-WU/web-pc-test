/**
 * 整合api接口
 */
import { isRepeat } from 'woyun-base'

import publicApi from './public-api'
import channelApi from './channel-api'
import productApi from './product-api'
import WLDApi from './wld-api'
import accountApi from './account-api'
import menuApi from './menu-api'
import dataApi from './data-api'
import externalApi from './external-api'
import systemApi from './system-api'
import reportApi from './report-api'
import configCenterApi from './config-center-api'
import configApi from './config-api'
import cameraApi from './camera-api'
import marketingApi from './marketing-api'
import LogApi from './log-api'
import InformationApi from './information-api'

function init(...list) {
    isRepeat(...list)
    return Object.assign(...list)
}

const api = init(publicApi, channelApi, productApi, WLDApi,
    menuApi, accountApi, externalApi, dataApi, systemApi,
    reportApi, configCenterApi, configApi, cameraApi, LogApi, marketingApi, InformationApi)

export default api
