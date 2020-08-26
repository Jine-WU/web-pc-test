/**
 * 系统管理相关接口：角色
 */
import { http } from '@/api/index'
import { API } from './api-config'

/**
 * 分页查询角色列表
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const roleList = data => {
    return http.request(API.roleList, data)
}

/**
 * 获取角色列表详情
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const getRoleInfo = data => {
    return http.request(API.getRoleInfo, data)
}

/**
 * 新增角色
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const createRole = data => {
    return http.request(API.createRole, data)
}

/**
 * 修改角色
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const updateRole = data => {
    return http.request(API.updateRole, data)
}

/**
 * 删除角色
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const deleteRole = data => {
    return http.myEasyMessage(API.deleteRole, data)
}

/**
 * 角色权限列表
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const getPowerByRole = (data) => {
    return http.request(API.getPowerByRole, data)
}

/**
 * 修改角色权限
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const updatePowerByRole = data => {
    return http.request(API.updatePowerByRole, data)
}

/**
 * 获取下拉框角色
 * @param data
 * @returns {*}
 */
const getLowerRole = data => {
    return http.myEasyMessage(API.getLowerRole, data)
}

/**
 * 系统用户列表
 * @param data
 * @returns {*}
 */
const userList = data => {
    return http.request(API.userList, data)
}

/**
 * 系统用户详情
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const getUserInfo = data => {
    return http.request(API.getUserInfo, data)
}

/**
 * 新建系统用户
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const createUser = data => {
    return http.request(API.createUser, data)
}

/**
 * 更新用户信息
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const updateUser = data => {
    return http.request(API.updateUser, data)
}

/**
 * 删除系统用户
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const deleteUser = data => {
    return http.myEasyMessage(API.deleteUser, data)
}

/**
 * 重置系统用户密码
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const resetUserPwd = data => {
    return http.myEasyMessage(API.resetUserPwd, data)
}

/**
 * 获取app版本控制列表
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const devicePage = data => {
    return http.myEasyMessage(API.devicePage, data)
}
/**
 * 新增及修改app版本控制列表
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const deviceSave = data => {
    return http.myEasyMessage(API.deviceSave, data)
}
/**
 * app版本信息列表
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const versionPage = data => {
    return http.myEasyMessage(API.versionPage, data)
}
/**
 * 新增及修改app版本信息列表
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const versionsave = data => {
    return http.myEasyMessage(API.versionsave, data)
}
/**
 * app版本发布
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const versionpublish = data => {
    return http.myEasyMessage(API.versionpublish, data)
}

/**
 * 获取用户权限
 * @param id
 * @returns {Promise<void>}
 */
const queryUserDataPermissionByUser = async id => {
    let data = {}
    await http.myEasyMessage(API.queryUserDataPermissionByUser + id, {}).then(res => {
        const array = []
        res.dataPermissionList.forEach(item => {
            array.push(item.dataScopeId)
        })
        res.partnerIdList = array
        data = res
    })
    return data
}

/**
 * 保存用户权限
 * @param data
 * @returns {*|ClientRequest|ClientHttp2Stream|never}
 */
const saveUserDataPermission = data => {
    return http.request(API.saveUserDataPermission, data)
}

const applicationManage = data => {
    return http.myEasyMessage(API.applicationManage, data)
}

const commonCodeDictionary = data => {
    return http.myEasyMessage(API.commonCodeDictionary, data)
}

const urlWhiteList = data => {
    return http.myEasyMessage(API.urlWhiteList, data)
}

const saveUrlWhiteList = data => {
    return http.myEasyMessage(API.saveUrlWhiteList, data)
}

const updateUrlWhiteList = data => {
    return http.myEasyMessage(API.updateUrlWhiteList, data)
}

const delUrlWhiteList = data => {
    return http.myEasyMessage(API.delUrlWhiteList, data)
}


export default {
    roleList,
    getRoleInfo,
    createRole,
    updateRole,
    deleteRole,
    getPowerByRole,
    updatePowerByRole,
    userList,
    getUserInfo,
    createUser,
    updateUser,
    deleteUser,
    resetUserPwd,
    getLowerRole,
    queryUserDataPermissionByUser,
    saveUserDataPermission,
    applicationManage,
    commonCodeDictionary,
    urlWhiteList,
    saveUrlWhiteList,
    updateUrlWhiteList,
    delUrlWhiteList,
    devicePage,
    deviceSave,
    versionPage,
    versionsave,
    versionpublish
}
